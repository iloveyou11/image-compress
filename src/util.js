const WIN = window

export const util = {
  // 用户通过页面标签 <input type="file" /> 上传的本地图片直接转化 data URL 字符串形式。
  // 可以使用 FileReader 文件读取构造函数。
  // FileReader 对象允许 Web 应用程序异步读取存储在计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。
  // 该实例方法 readAsDataURL 读取文件内容并转化成 base64 字符串。
  // 在读取完后，在实例属性 result 上可获取文件内容。

  /**
  * 文件转化成 `data URL` 字符串
  * @param {File} file 文件对象
  * @param {Function} callback 成功回调函数
  * @param {Function} error 取消回调函数
  */
  file2DataUrl: (file, callback, error) => {
    let reader = new FileReader()
    // 加载成功则执行成功回调函数
    reader.onload = function () {
      callback(reader.result)
    }
    // 加载失败则执行失败回调函数
    reader.onerror = function () {
      if (isFunc(error)) {
        error('读取文件失败！')
      }
    }
    reader.readAsDataURL(file)
  },





  // 若想将用户通过本地上传的图片放入缓存并 img 标签显示出来，除了可以利用以上方法转化成的 base64 字符串作为图片 src，还可以直接用 URL 对象，引用保存在 File 和 Blob 中数据的 URL。
  // 使用对象 URL 的好处是可以不必把文件内容读取到 JavaScript 中 而直接使用文件内容。
  // 为此，只要在需要文件内容的地方提供对象 URL 即可。
  // 注意：要创建对象 URL，可以使用 window.URL.createObjectURL() 方法，并传入 File 或 Blob 对象。如果不再需要相应数据，最好释放它占用的内容。但只要有代码在引用对象 URL，内存就不会释放。要手工释放内存，可以把对象 URL 传给 URL.revokeObjectURL()。

  /**
   * 文件转化成 `Image` 对象
   * @param {File} file 文件对象
   * @param {Function} callback 成功回调函数
   * @param {Function} error 错误回调函数
   */
  file2Image: (file, callback, error) => {
    let image = new Image()
    let URL = WIN.URL || WIN.webkitURL

    // 解决IOS上webkit内核浏览器抛出错误 `The operation is insecure` 问题
    if (WIN.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WIN.navigator.userAgent)) {
      image.crossOrigin = 'anonymous'
    }

    image.alt = file.name
    image.onerror = function () {
      if (isFunc(error)) {
        error('图片加载错误！')
      }
    }

    // 如果存在URL，则直接使用 URL.createObjectURL() 方法，否则使用 file2DataUrl 方法
    if (URL) {
      let url = URL.createObjectURL(file)
      image.onload = function () {
        callback(image)
        URL.revokeObjectURL(url)
      }
      image.src = url
    } else {
      this.file2DataUrl(file, function (dataUrl) {
        image.onload = function () {
          callback(image)
        }
        image.src = dataUrl
      }, error)
    }
  },





  // 通过图片链接（url）获取图片 Image 对象，由于图片加载是异步的，因此放到回调函数 callback 回传获取到的 Image 对象。

  /**
   * `url` 转化成 `Image` 对象
   * @param {File} url `url`
   * @param {Function} callback 成功回调函数
   * @param {Function} error 失败回调函数
   */
  url2Image: (url, callback, error) => {
    let image = new Image()
    image.src = url
    image.onload = function () {
      callback(image)
    }
    image.onerror = function () {
      if (isFunc(error)) {
        error('图片加载错误！')
      }
    }
  },





  // 利用 drawImage() 方法将 Image 对象绘画在 Canvas 对象上。

  /**
   * `Image` 转化成 `Canvas` 对象
   * @param {File} image `Image` 对象
   * @param {Number} dWidth 目标宽度
   * @param {Number} dHeight 目标高度
   * @param {Function} beforeDraw 在图片绘画之前的回调函数
   * @param {Function} afterDraw 在图片绘画之后的回调函数
   * @param {Number} width 宽
   * @param {Number} height 高
   * @return {HTMLCanvasElement} `Canvas` 对象
   */
  image2Canvas: (image, dWidth, dHeight, beforeDraw, afterDraw, width, height) => {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    canvas.width = width || image.naturalWidth
    canvas.height = height || image.naturalHeight
    if (isFunc(beforeDraw)) {
      beforeDraw(ctx, canvas)
    }
    ctx.save()
    ctx.drawImage(image, 0, 0, dWidth, dHeight)
    ctx.restore()
    if (isFunc(afterDraw)) {
      afterDraw(ctx, canvas)
    }
    return canvas
  },





  // HTMLCanvasElement 对象有 toDataURL(type, encoderOptions) 方法，返回一个包含图片展示的 data URL 。
  // 同时可以指定输出格式和质量。

  /**
   * `Canvas` 转化成 `data URL` 对象
   * @param {File} file  `Canvas` 对象
   * @param {Float} quality 输出质量比例
   * @return {String} `data URL` 字符串
   */
  canvas2DataUrl: (canvas, quality, type) => {
    return canvas.toDataURL(type || 'image/jpeg', quality)
  },





  // 图片链接也可以是 base64 字符串，直接赋值给 Image 对象 src 即可。

  /**
   * `data URL` 转化成 `Image` 对象
   * @param {File} dataUrl `data URL` 字符串
   * @param {Function} callback 成功回调函数
   * @param {Function} error 失败回调函数
   */
  dataUrl2Image: (dataUrl, callback, error) => {
    let image = new Image()
    image.onload = function () {
      callback(image)
    }
    image.error = function () {
      if (isFunc(error)) {
        error('图片加载错误！')
      }
    }
    image.src = dataUrl
  },





  // 将 data URL 字符串转化为 Blob 对象。主要思路是：先将 data URL 数据（data） 部分提取出来，用 atob 对经过 base64 编码的字符串进行解码，再转化成 Unicode 编码，存储在Uint8Array（8位无符号整型数组，每个元素是一个字节） 类型数组，最终转化成 Blob 对象。

  /**
   * `data URL` 转化成 `Blob` 对象
   * @param {File} dataUrl `data URL` 字符串
   * @param {String} type `mime`
   * @return {Blob} `Blob` 对象
   */
  dataUrl2Blob: (dataUrl, type) => {
    let data = dataUrl.split(',')[1]
    let mimePattern = /^data:(.*?)(base64)?,/
    let mime = dataUrl.match(mimePattern)[1]
    let binStr = atob(data)
    let len = data.length
    let arr = new Uint8Array(len)

    for (let i = 0; i < len; i++) {
      arr[i] = binStr.charCodeAt(i)
    }
    return new Blob([arr], { type: type || mime })
  },





  // 将 Blob 对象转化成 data URL 数据，由于 FileReader 的实例 readAsDataURL 方法不仅支持读取文件，还支持读取 Blob 对象数据，这里复用上面 file2DataUrl 方法即可

  /**
   * `Blob` 对象转化成 `data URL`
   * @param {Blob} blob `Blob` 对象
   * @param {Function} callback 成功回调函数
   * @param {Function} error 失败回调函数
   */
  blob2DataUrl: (blob, callback, error) => {
    this.file2DataUrl(blob, callback, error)
  },





  // 将 Blob 对象转化成 Image 对象，可通过 URL 对象引用文件，也支持引用 Blob 这样的类文件对象，同样，这里复用上面 file2Image 方法即可：

  /**
   * `Blob`对象 转化成 `Image` 对象
   * @param {Blob} blob `Blob` 对象
   * @param {Function} callback 成功回调函数
   * @param {Function} callback 失败回调函数
   */
  blob2Image: (blob, callback, error) => {
    this.file2Image(blob, callback, error)
  },





  // HTMLCanvasElement 有 toBlob(callback, [type], [encoderOptions]) 方法创造 Blob 对象，用以展示 canvas 上的图片；这个图片文件可以被缓存或保存到本地，由用户代理端自行决定。第二个参数指定图片格式，如不特别指明，图片的类型默认为 image/png，分辨率为 96dpi。第三个参数用于针对image/jpeg 格式的图片进行输出图片的质量设置。

  /**
   * `Canvas` 对象转化成 `Blob` 对象
   * @param {HTMLCanvasElement} canvas `Canvas` 对象
   * @param {Function} callback 回调函数
   * @param {Float} quality 输出质量比例
   * @param {String} type `mime`
   */
  canvas2Blob: (canvas, callback, quality, type) => {
    let _this = this
    if (!HTMLCanvasElement.prototype.toBlob) {
      Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
        value: function (callback, type, quality) {
          let dataUrl = this.toDataURL(type, quality)
          callback(_this.dataUrl2Blob(dataUrl))
        }
      })
    }
    canvas.toBlob(function (blob) {
      callback(blob)
    }, type || 'image/jpeg', quality || 0.8)
  },





  // 上传图片（已压缩），可以使用 FormData 传入文件对象，通过 XHR 直接把文件上传到服务器。

  /**
   * 文件上传
   * @param {String} url 上传路径
   * @param {File} file 文件对象
   * @param {Function} callback 回调函数
   */
  upload: (url, file, callback) => {
    let xhr = new XMLHttpRequest()
    let fd = new FormData()
    fd.append('file', file)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // 上传成功
        callback && callback(xhr.responseText)
      } else {
        throw new Error(xhr)
      }
    }
    xhr.open('POST', url, true)
    xhr.send(fd)
  }
}