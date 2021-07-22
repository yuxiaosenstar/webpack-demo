// ./webpack.config.js
// import { Configuration } from 'webpack'
const path = require('path')

/**
 * @type {Configuration}
 */
const config = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'output'),
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        // 对同一个模块使用多个 loader，注意顺序
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}

module.exports = config
