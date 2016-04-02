/**
 * Created by liekkas on 16/4/1.
 */
import webpack from 'webpack'
import webpackConfig from '../webpack.config'
import config from '../config'
const compiler = webpack(webpackConfig)

console.log('>>> prodCompile:Create webpack compiler.')
compiler.run(function (err, stats) {
  const jsonStats = stats.toJson()

  console.log('>>> prodCompile:Webpack compile completed.')
  console.log(stats.toString(config.compiler_stats))

  if (err) {
    console.log('>>> prodCompile:Webpack compiler encountered a fatal error.', err)
    process.exit(1)
  } else if (jsonStats.errors.length > 0) {
    console.log('>>> prodCompile:Webpack compiler encountered errors.')
    console.log(jsonStats.errors)
    process.exit(1)
  } else if (jsonStats.warnings.length > 0) {
    console.log('>>> prodCompile:Webpack compiler encountered warnings.')

    if (config.compiler_fail_on_warning) {
      process.exit(1)
    }
  } else {
    console.log('>>> prodCompile:No errors or warnings encountered.')
  }
})
