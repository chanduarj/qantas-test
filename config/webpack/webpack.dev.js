const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    port: 9000,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
