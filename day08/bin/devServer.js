
import path from 'path'
import webpack from 'webpack'
import config from '../config'
import express from 'express'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

const app = express()
const host = config.server_host
const port = config.server_port

const compiler = webpack(webpackConfig)

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
