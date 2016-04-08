/**
 * Created by liekkas on 16/4/1.
 */
var path = require('path')

var env = process.env.NODE_ENV || 'development'
console.log('>>> config:env',env)

function isDEV() {
  return env === 'development'
}
function isPROD() {
  return env === 'production'
}

var config = {
  env: env,

  // ----------------------------------
  // 项目结构
  // ----------------------------------
  path_base  : path.resolve(__dirname, '..'),
  dir_client : 'src',
  dir_dist   : 'dist',
  dir_server : 'server',
  dir_test   : 'tests',

  // ----------------------------------
  // 开发服务器设置
  // ----------------------------------
  server_host: 'localhost',
  server_port: 3000,

  // ----------------------------------
  // 编译设置
  // ----------------------------------
  compiler_css_modules     : true,
  compiler_fail_on_warning : false,
  compiler_devtool         : isDEV() ? 'eval-cheap-module-source-map' : null,
  compiler_hash_type       : isDEV() ? 'hash' : 'chunkhash',
  compiler_public_path     : '',
  compiler_stats           : {
    chunks : isPROD(),
    chunkModules : isPROD(),
    colors : true
  },
  compiler_vendor : [
    'react',
    'react-dom',
  ],
}

// ------------------------------------
// 环境变量
// ------------------------------------
config.globals = {
  'process.env'  : {
    'NODE_ENV' : JSON.stringify(config.env)
  },
  'NODE_ENV'     : config.env,
  '__DEV__'      : isDEV(),
  '__PROD__'     : isPROD(),
}

module.exports = config
