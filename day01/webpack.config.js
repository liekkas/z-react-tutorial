var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  context: path.join(__dirname, 'src'),
  entry: [
    'webpack-hot-middleware/client',
    './main.js',
  ],
  module: {},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      hash: false,
      favicon: 'favicon.ico',
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

// ------------------------------------
// Loaders
// ------------------------------------
config.module.loaders = [
  {
    test: /\.(js|jsx)$/,
    include: path.join(__dirname, 'src'),
    loader: 'babel',
  }
]

// ------------------------------------
// Plugins
// ------------------------------------
//config.plugins.push(
//
//)

module.exports = config
