// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
if (process.env.NODE_ENV === 'production') {
  module.exports = {
    productionSourceMap: false,
    runtimeCompiler: true,
    chainWebpack: config => {
      config.module.rule('images').use('url-loader')
        .loader('file-loader') // replaces the url-loader
        .tap(options => Object.assign(options, {
          name: '../../wars/opencps-store/src/main/webapp/js/cli/motcua_group/app/images/[name].[ext]'
        }))
      config.module.rule('svg').use('file-loader')
        .tap(options => Object.assign(options, {
          name: '../../wars/opencps-store/src/main/webapp/js/cli/motcua_group/app/images/[name].[ext]'
        }))
    },
    css: {
      extract: {
        filename: '../../wars/opencps-store/src/main/webapp/js/cli/motcua_group/app/css/[name].css',
        chunkFilename: '../../wars/opencps-store/src/main/webapp/js/cli/motcua_group/app/css/[name].css'
      }
    },
    configureWebpack: {
      // plugins: [new BundleAnalyzerPlugin()],
      output: {
        filename: '../../wars/opencps-store/src/main/webapp/js/cli/motcua_group/app/js/[name].js',
        chunkFilename: '../../wars/opencps-store/src/main/webapp/js/cli/motcua_group/app/js/[name].js'
      }
    }
  }
} else {
  module.exports = {
    runtimeCompiler: true
  }
}
