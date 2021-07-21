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
}

module.exports = config
