const EXIF = require('exif-js')
const REGEXP_IMAGE_TYPE = /^image\// // 判断图片类型正则表达式
const REGEXP_EXTENSION = /\.\w+$/ // 判断文件扩展名正则表达式
const util = require('./util')

// 默认配置项
const defaultOptions = {
  file: null,
  quality: 0.8,
  convertSize: 2048000,
  loose: true,
  redressOrientation: true
}

// 判断是否是函数
const isFunc = val => {
  return typeof val === 'function'
}

// 判断是否是图片类型
const isImageType = val => {
  return REGEXP_IMAGE_TYPE.test(val)
}

// 图片类型转化为文件拓展名
const imageTypeToExtension = val => {
  const extension = isImageType(val) ? val.substr(6) : ''
  if (extension === 'jpeg') {
    extension = 'jpg'
  }
  return '.' + extension
}

// ImageCompress类
class ImageCompress {
  constructor(options) {
    this.options = Object.assign({}, defaultOptions, options)
    this.file = options.file
    this.image = null
    this.ParsedOrientationInfo = null

    // 初始化
    this.init()
  }

  // 初始化
  init() {
    let _this = this
    let file = this.file
    let options = this.options

    // 图片校验
    if (!file || !isImageType(file.type)) {
      _this.error('请上传图片文件!')
      return
    }

    // 初始化mimeType
    if (!isImageType(options.mimeType)) {
      options.mimeType = file.type
    }

    util.file2Image(file, function (img) {
      if (isFunc(_this.beforeCompress)) {
        _this.image = img
        file.width = img.naturalWidth
        file.height = img.naturalHeight
        _this.beforeCompress(file)
      }

      if (file.type === 'image/jpeg' && options.redressOrientation) {
        _this.getParsedOrientationInfo(img, function (info) {
          _this.parsedOrientationInfo = info
          _this.rendCanvas()
        })
      } else {
        _this.parsedOrientationInfo = {
          rotate: 0,
          scaleX: 1,
          scaleY: 1
        }
        _this.rendCanvas()
      }
    }, _this.error)
  }

  // canvas渲染模块
  rendCanvas() {
    let _this = this
    let options = this.options
    let image = this.image
    let edge = this.getExpectedEdge()
    let dWidth = edge.dWidth
    let dHeight = edge.dHeight
    let width = edge.width
    let height = edge.height

    let canvas = util.image2Canvas(image, dWidth, dHeight, _this.beforeDraw.bind(_this), _this.afterDraw.bind(_this), width, height)

    util.canvas2Blob(canvas, function (blob) {
      if (blob) {
        blob.width = canvas.width
        blob.height = canvas.height
      }
      _this.success(blob)
    }, options.quality, options.mimeType)
  }

  // 压缩之前的钩子函数
  beforeCompress() {
    if (isFunc(this.options.beforeCompress)) {
      this.options.beforeCompress(this.file)
    }
  }

  // 获取用户想要输出的宽高
  getExpectedEdge() {
    let image = this.image
    let parsedOrientationInfo = this.parsedOrientationInfo
    let rotate = parsedOrientationInfo.rotate
    let options = this.options
    let naturalWidth = image.naturalWidth
    let naturalHeight = image.naturalHeight

    let is90DegreesRotated = Math.abs(rotate) % 180 === 90
    let temp

    if (is90DegreesRotated) {
      temp = naturalHeight
      naturalHeight = naturalWidth
      naturalWidth = temp
    }

    let aspectRatio = naturalWidth / naturalHeight
    let maxWidth = Math.max(options.maxWidth, 0) || Infinity
    let maxHeight = Math.max(options.maxHeight, 0) || Infinity
    let minWidth = Math.max(options.minWidth, 0) || 0
    let minHeight = Math.max(options.minHeight, 0) || 0
    let width = Math.max(options.width, 0) || naturalWidth
    let height = Math.max(options.height, 0) || naturalHeight

    if (maxWidth < Infinity && maxHeight < Infinity) {
      if (maxHeight * aspectRatio > maxWidth) {
        maxHeight = maxWidth / aspectRatio
      } else {
        maxWidth = maxHeight * aspectRatio
      }
    } else if (maxWidth < Infinity) {
      maxHeight = maxWidth / aspectRatio
    } else if (maxHeight < Infinity) {
      maxWidth = maxHeight * aspectRatio
    }

    if (minWidth > 0 && minHeight > 0) {
      if (minHeight * aspectRatio > minWidth) {
        minHeight = minWidth / aspectRatio
      } else {
        minWidth = minHeight * aspectRatio
      }
    } else if (minWidth > 0) {
      minHeight = minWidth / aspectRatio
    } else if (minHeight > 0) {
      minWidth = minHeight * aspectRatio
    }

    if (height * aspectRatio > width) {
      height = width / aspectRatio
    } else {
      width = height * aspectRatio
    }

    width = Math.floor(Math.min(Math.max(width, minWidth), maxWidth))
    height = Math.floor(Math.min(Math.max(height, minHeight), maxHeight))

    let dWidth = width
    let dHeight = height

    if (is90DegreesRotated) {
      temp = dHeight
      dHeight = dWidth
      dWidth = temp
    }

    return {
      dWidth: dWidth,
      dHeight: dHeight,
      width: width,
      height: height
    }
  }

  // 获取转化后的方向信息
  getParsedOrientationInfo(img, callback) {
    let _this = this

    this.getOrientation(img, function (orientation) {
      if (isFunc(callback)) {
        callback(_this.parseOrientation(orientation))
      }
    })
  }

  // 获取方向
  getOrientation(img, callback) {
    EXIF.getData(img, function () {
      let orientation = EXIF.getTag(this, 'Orientation')
      if (isFunc(callback)) {
        callback(orientation)
      }
    })
  }

  // 逆向转化Exif获取到图片的方向信息
  parseOrientation(orientation) {
    let rotate = 0
    let scaleX = 1
    let scaleY = 1

    switch (orientation) {
      // 水平翻转
      case 2:
        scaleX = -1
        break
      // 向左旋转180°
      case 3:
        rotate = -180
        break
      // 垂直翻转
      case 4:
        scaleY = -1
        break
      // 垂直翻转并且向右旋转90°
      case 5:
        rotate = 90
        scaleY = -1
        break
      // 向右旋转90°
      case 6:
        rotate = 90
        break
      // 水平翻转并且向右旋转90°
      case 7:
        rotate = 90
        scaleX = -1
        break
      // 向左旋转90°
      case 8:
        rotate = -90
        break
      default:
        break
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    }
  }

  // 画布上绘制图片前的一些操作：设置画布一些样式，支持用户自定义
  beforeDraw(ctx, canvas) {
    let parsedOrientationInfo = this.parsedOrientationInfo
    let rotate = parsedOrientationInfo.rotate
    let scaleX = parsedOrientationInfo.scaleX
    let scaleY = parsedOrientationInfo.scaleY
    let file = this.file
    let options = this.options
    let fillStyle = 'transparent'
    let width = canvas.width
    let height = canvas.height

    // `png` 格式图片大小超过 `convertSize`, 转化成 `jpeg` 格式
    if (file.size > options.convertSize && options.mimeType === 'image/png') {
      fillStyle = '#fff'
      options.mimeType = 'image/jpeg'
    }

    // 覆盖默认的黑色填充色
    ctx.fillStyle = fillStyle
    ctx.fillRect(0, 0, width, height)

    // 用户自定义画布样式
    if (isFunc(options.beforeDraw)) {
      options.beforeDraw.call(this, ctx, canvas)
    }

    ctx.save()

    switch (rotate) {
      case 90:
        ctx.translate(width, 0)
        break
      case -90:
        ctx.translate(0, height)
        break
      case -180:
        ctx.translate(width, height)
        break
    }

    ctx.rotate((rotate * Math.PI) / 180)
    ctx.scale(scaleX, scaleY)
  }

  // 画布上绘制图片后的一些操作：支持用户自定义
  afterDraw(ctx, canvas) {
    let options = this.options
    // 用户自定义画布样式
    if (isFunc(options.afterDraw)) {
      options.afterDraw.call(this, ctx, canvas)
    }
  }

  // 错误触发函数
  error(msg) {
    let options = this.options
    if (isFunc(options.error)) {
      options.error.call(this, msg)
    } else {
      throw new Error(msg)
    }
  }

  // 成功触发函数
  success(result) {
    let options = this.options
    let file = this.file
    let image = this.image
    let edge = this.getExpectedEdge()
    let naturalHeight = image.naturalHeight
    let naturalWidth = image.naturalWidth

    if (result && result.size) {
      // 在非宽松模式下，用户期待的输出宽高没有大于源图片的宽高情况下，输出文件大小大于源文件，返回源文件
      if (!options.loose && result.size > file.size && !(
        edge.width > naturalWidth
        || edge.height > naturalHeight
      )) {
        console.warn('当前设置的是非宽松模式，压缩结果大于源图片，输出源图片')
        result = file
      } else {
        const date = new Date()

        result.lastModified = date.getTime()
        result.lastModifiedDate = date
        result.name = file.name

        // 文件 `name` 属性中的后缀转化成实际后缀
        if (result.name && result.type !== file.type) {
          result.name = result.name.replace(
            REGEXP_EXTENSION,
            imageTypeToExtension(result.type)
          )
        }
      }
    } else {
      // 在某些情况下压缩后文件为 `null`，返回源文件
      console.warn('图片压缩出了点意外，输出源图片')
      result = file
    }

    if (isFunc(options.success)) {
      options.success.call(this, result)
    }
  }
}

for (let key in util) {
  if (util.hasOwnProperty(key)) {
    ImageCompress[key] = util[key]
  }
}

export default ImageCompress