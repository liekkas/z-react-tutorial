import path from 'path'
import webpack from 'webpack'
import config from './config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const {__DEV__, __PROD__} = config.globals

const webpackConfig = {
  context: path.join(__dirname, config.dir_client),
  devtool: config.compiler_devtool,
  module: {},
}

// ------------------------------------
// Entry Points
// ------------------------------------
const APP_ENTRY_PATH = './main.js'
webpackConfig.entry = {
  app: __DEV__
    ? [APP_ENTRY_PATH, 'webpack-hot-middleware/client']
    : [APP_ENTRY_PATH],
  vendor: config.compiler_vendor
}

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
  filename: `[name].[${config.compiler_hash_type}].js`,
  path: path.join(__dirname, config.dir_dist),
  publicPath: config.compiler_public_path
}

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals),
  new HtmlWebpackPlugin({
    template: 'index.html',
    hash: false,
    favicon: 'favicon.ico',
    filename: 'index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor']
  })
]
if (__DEV__) {
  console.log('>>> WebpackConfig:Enable plugins for live development (HMR, NoErrors).')
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  )
} else if (__PROD__) {
  console.log('>>> WebpackConfig:Enable plugins for production (OccurenceOrder, Dedupe & UglifyJS).')
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  )
}

// ------------------------------------
// Pre-Loaders
// ------------------------------------
webpackConfig.module.preLoaders = [{
  test: /\.(js|jsx)$/,
  loader: 'eslint',
  exclude: /node_modules/
}]

webpackConfig.eslint = {
  configFile: './.eslintrc',
  emitWarning: __DEV__
}

// ------------------------------------
// Loaders
// ------------------------------------
webpackConfig.module.loaders = [
  {
    test: /\.(js|jsx)$/,
    include: path.join(__dirname, 'src'),
    loader: 'babel',
  },
  {
    test: /\.json$/,
    loader: 'json'
  },
]

// File loaders
/* eslint-disable */
webpackConfig.module.loaders.push(
  { test: /\.woff(\?.*)?$/,  loader: 'url?limit=10000&mimetype=application/font-woff' },
  { test: /\.woff2(\?.*)?$/, loader: 'url?limit=10000&mimetype=application/font-woff2' },
  { test: /\.otf(\?.*)?$/,   loader: 'file?limit=10000&mimetype=font/opentype' },
  { test: /\.ttf(\?.*)?$/,   loader: 'url?limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?.*)?$/,   loader: 'file' },
  { test: /\.svg(\?.*)?$/,   loader: 'url?limit=10000&mimetype=image/svg+xml' },
  { test: /\.(png|jpg|gif)$/,loader: 'url?limit=8192' }
)
/* eslint-enable */

// ------------------------------------
// Style Loaders
// ------------------------------------
const cssLoader = !config.compiler_css_modules
  ? 'css?sourceMap'
  : [
  'css?modules',
  'sourceMap',
  'importLoaders=1',
  'localIdentName=[name]__[local]___[hash:base64:5]'
].join('&')

webpackConfig.module.loaders.push({
  test: /\.scss$/,
  exclude: path.resolve(__dirname, 'src/styles'),
  loaders: ['style', cssLoader, 'postcss', 'sass?sourceMap']
},{
  test: /\.scss$/,
  include: path.resolve(__dirname, 'src/styles'),
  loaders: ['style', 'css', 'postcss', 'sass?sourceMap']
})

webpackConfig.module.loaders.push({
  test: /\.less$/,
  exclude: path.resolve(__dirname, 'src/styles'),
  loaders: ['style', cssLoader, 'postcss', 'less?sourceMap']
},{
  test: /\.less/,
  include: path.resolve(__dirname, 'src/styles'),
  loaders: ['style', 'css', 'postcss', 'less?sourceMap']
})

webpackConfig.module.loaders.push({
  test: /\.css$/,
  exclude: path.resolve(__dirname, 'src/styles'),
  loaders: ['style', cssLoader, 'postcss']
},{
  test: /\.css/,
  include: path.resolve(__dirname, 'src/styles'),
  loaders: ['style', 'css', 'postcss']
})

if (__PROD__) {
  console.log('>>> WebpackConfig:Apply ExtractTextPlugin to CSS loaders.')
  webpackConfig.module.loaders.filter((loader) =>
    loader.loaders && loader.loaders.find((name) => /css/.test(name.split('?')[0]))
  ).forEach((loader) => {
    const [first, ...rest] = loader.loaders
    loader.loader = ExtractTextPlugin.extract(first, rest.join('!'))
    delete loader.loaders
  })

  webpackConfig.plugins.push(
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true
    })
  )
}

module.exports = webpackConfig
