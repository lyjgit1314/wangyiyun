module.exports = {
  publicPath: '/',
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views',
        plugins: '@/plugins',
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api-ten-virid.vercel.app',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },

}
