const webpack = require('webpack')

module.exports = {
  transpileDependencies: true,
  outputDir: "../uniManage-Boot/src/main/resources/static",
  configureWebpack: {
    resolve: {
      fallback: {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "util": require.resolve("util/"),
        "process": require.resolve("process/browser"),
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
  },
  devServer: {
    proxy: {
      '/': {
        target: "http://localhost:9090",
        changeOrigin: true,
      }
    }
  }
}
