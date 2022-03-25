// ./webpack.config.js
// import { Configuration } from 'webpack'
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const RemoveCommentsPlugin = require('./remove-comments-plugin')

/**
 * @type {Configuration}
 */
const config = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "none",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "你好，webpack",
      template: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: ["public"],
    }),
    new RemoveCommentsPlugin(),
  ],
};

module.exports = config
