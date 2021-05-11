## 简介
`image-compress`是一个图片压缩工具，支持上传图片和填写链接直接进行压缩，支持单张图片也支持批量图片，操作十分方便。

## 使用方法
直接拷贝打包的js文件`dist/image-compress.js`到项目中，即可使用。在html中引入此js文件：`<script src="./dist/image-compress.js"></script>`。在传参时，只需要传入需要压缩的图片即可，其他参数都是非必须的。

```js
new ImageCompress({file: file});
```

默认的参数配置为：

- 压缩率0.8
- 输出图片宽高不变
- 输出图片格式不变（但是当png图片大于2M时，转化为jpeg图片）
- png图片默认填充透明色

我们还可以根据自身需求自定义以下配置项：

```js
const options = {
  file: file,
  quality: 0.6, // 配置压缩比（`quality`）
  mimeType: 'image/jpeg', // 输出图片类型（`mimeType`）
  maxWidth: 2000, // 最大宽（`maxWidth`）
  maxHeight: 2000, // 最大高（`maxHeight`）
  width: 1000, // 宽（`width`）
  height: 1000, // 高（`height`）
  minWidth: 500, // 最小宽（`minWidth`）
  minHeight: 500, // 最小高（`minHeight`）
};

new ImageCompress(options);
```

当然，我们还可以传入自定义钩子函数：

```js
const options = {
  file: file,

  // 压缩前回调
  beforeCompress: result => {
      // result是整合来尺寸、图片类型和大小等相关信息的 `blob` 对象
  },

  // 压缩成功回调
  success: result => {
      // result是整合来尺寸、图片类型和大小等相关信息的 `blob` 对象
  },

  // 压缩失败回调
  error: result => {
      // result是整合来尺寸、图片类型和大小等相关信息的 `blob` 对象
  },

  // 图片绘画前
  beforeDraw: ctx => {

  },

  // 图片绘画后
  afterDraw: (ctx, canvas) => {

  }
};

new ImageCompress(options);
```

## 如何一步步实现

核心文件就两个：`src/index.js`、`src/util.js`

- `src/index.js`：导出class类
- `src/util.js`：工具函数

### 1. 定义工具函数
```js
const WIN = window

export const util = {
  // 文件转化成 `data URL` 字符串
  file2DataUrl: (file, callback, error) => {},
  // 文件转化成 `Image` 对象
  file2Image: (file, callback, error) => {},
  // `url` 转化成 `Image` 对象
  url2Image: (url, callback, error) => {},
  // `Image` 转化成 `Canvas` 对象
  image2Canvas: (image, dWidth, dHeight, beforeDraw, afterDraw, width, height) => {},
  // `Canvas` 转化成 `data URL` 对象
  canvas2DataUrl: (canvas, quality, type) => {},
  // `data URL` 转化成 `Image` 对象
  dataUrl2Image: (dataUrl, callback, error) => {},
  // `data URL` 转化成 `Blob` 对象
  dataUrl2Blob: (dataUrl, type) => {},
  // `Blob` 对象转化成 `data URL`
  blob2DataUrl: (blob, callback, error) => {},
  // `Blob`对象 转化成 `Image` 对象
  blob2Image: (blob, callback, error) => {},
  // `Canvas` 对象转化成 `Blob` 对象
  canvas2Blob: (canvas, callback, quality, type) => {},
   // 文件上传
  upload: (url, file, callback) => {}
}
```
### 2. 定义class类并导出

```js
const util = require('./util')

// 默认配置项
const defaultOptions = {
  file: null,
  quality: 0.8,
  convertSize: 2048000,
  loose: true,
  redressOrientation: true
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
  init() {}

  // canvas渲染模块
  rendCanvas() {}

  // 压缩之前的钩子函数
  beforeCompress() {}

  // 获取用户想要输出的宽高
  getExpectedEdge() {}

  // 获取转化后的方向信息
  getParsedOrientationInfo(img, callback) {}

  // 获取方向
  getOrientation(img, callback) {}

  // 逆向转化Exif获取到图片的方向信息
  parseOrientation(orientation) {}

  // 画布上绘制图片前的一些操作：设置画布一些样式，支持用户自定义
  beforeDraw(ctx, canvas) {}

  // 画布上绘制图片后的一些操作：支持用户自定义
  afterDraw(ctx, canvas) {}

  // 错误触发函数
  error(msg) {}

  // 成功触发函数
  success(result) {}
}

for (let key in util) {
  if (util.hasOwnProperty(key)) {
    ImageCompress[key] = util[key]
  }
}

export default ImageCompress
```