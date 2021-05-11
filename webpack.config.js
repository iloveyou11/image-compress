const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    'image-compress': './src/index.js',
    'image-compress.min': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: 'ImageCompress',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        include: /\.min\./,
      })
    ]
  }
}
