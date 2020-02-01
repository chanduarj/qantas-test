const HtmlWebpackPlugin = require('html-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const path = require('path');

const appRoot = path.resolve(__dirname, './../../.');

module.exports = {
  context: `${appRoot}/src`,
  entry: {
    index: `./scripts/main.js`
  },
  output: {
    filename: './[name].[hash:8].js',
    path: `${appRoot}/dist`,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${appRoot}/src/index.html`,
      filename: 'index.html',
      inject: true
    })
  ]
};
