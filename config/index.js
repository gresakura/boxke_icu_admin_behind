module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'statuc',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
}