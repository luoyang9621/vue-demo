module.exports = {
    devServer: {
      port: '8765',
      proxy: {
        '/api': {
            target: 'http://api.wallet.szspapp.com/api/',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            }
        }
      },
    },
    productionSourceMap: false
};