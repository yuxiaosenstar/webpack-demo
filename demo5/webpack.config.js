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
        test: /\.md$/,
        use: ['./markdown-loader1.js'],
      },
      // {
      //   test: /\.md$/,
      //   use: ['html-loader', './markdown-loader2.js'],
      // },
    ],
  },
}

module.exports = config
