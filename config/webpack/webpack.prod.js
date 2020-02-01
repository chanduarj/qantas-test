const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const common = require('./webpack.common.js');
const appRoot = path.resolve(__dirname, './../../.');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin(['dist'], { root: appRoot })]
});
