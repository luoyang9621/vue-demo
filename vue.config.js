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
    productionSourceMap: false,
    outputDir: 'dist/lyWWW', // 生成最终目录的dist文件夹，也可以再最内层添加一个
    assetsDir: 'static', // 存放js,css,img等静态资源文件的,相对于outputDir的
    // publicPath: '/public/client' // 为了配合egg的
};