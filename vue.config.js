const { defineConfig } = require('@vue/cli-service')
const FileManagerPlugin = require("filemanager-webpack-plugin"); //引入
const packageName = 'dist'

const px2rem = require('postcss-px2rem')
var path = require('path')

const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})

module.exports = {
  productionSourceMap: false,
  outputDir: packageName, // 包名，我这里将他提取成了一个常量
  devServer: {
    open: true, // 默认打开
    port: 8001, // 本地服务端口口
    proxy: {
        // 代理
      "/api": {
        target: '192.168.162.73:8085', //服务器地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            postcss
          ]
        }
      }
    }
  },
    // webpack配置
    configureWebpack: config => {
      config.resolve = {
        extensions: ['.js', '.vue', '.json', '.ts'],
        alias: {
          '@': path.join(__dirname, 'src')
        }
      }
      // plugins插件是一个数组且webpack本身已经有一些配置，那么我们需要将其追加到数组中
      let fileManagerPlugin = new FileManagerPlugin({ 
        onEnd: {
          delete: [   //首先需要删除项目根目录下的dist.zip
            `./${packageName}.zip`,   
          ],
          archive: [ //然后我们选择dist文件夹将之打包成dist.zip并放在根目录
            {source: `./${packageName}`, destination: `./${packageName}.zip`},   
          ]
        }
      })
      config.plugins.push(fileManagerPlugin) // 追加到webpack plugins数组中。
    }
  };

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
})
