module.exports = {
  productionSourceMap: false,
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module.rule('images').use('url-loader')
      .loader('file-loader') // replaces the url-loader
      .tap(options => Object.assign(options, {
        name: '../../wars/opencps-store/src/main/webapp/js/cli/manager_tracking/app/images/[name].[ext]'
      }))
    config.module.rule('svg').use('file-loader')
      .tap(options => Object.assign(options, {
        name: '../../wars/opencps-store/src/main/webapp/js/cli/manager_tracking/app/images/[name].[ext]'
      }))
  },
  css: {
    extract: {
      filename: '../../wars/opencps-store/src/main/webapp/js/cli/manager_tracking/app/css/[name].css',
      chunkFilename: '../../wars/opencps-store/src/main/webapp/js/cli/manager_tracking/app/css/[name].css'
    }
  },
  configureWebpack: {
    output: {
      filename: '../../wars/opencps-store/src/main/webapp/js/cli/manager_tracking/app/js/[name].js',
      chunkFilename: '../../wars/opencps-store/src/main/webapp/js/cli/manager_tracking/app/js/[name].js'
    }
  }
}
