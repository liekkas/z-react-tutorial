var express = require('express')
var webpackDevMiddleware = require("webpack-dev-middleware")
var webpackHotMiddleware = require("webpack-hot-middleware")
var webpack = require('webpack')
var webpackConfig = require('../webpack.config.js')
var path = require('path')
var app = express()
var host = 'localhost'
var port = 3000

var compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}))

app.use(webpackHotMiddleware(compiler))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, host, function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log(`Server is now running at ${host}:${port}.`)
})
