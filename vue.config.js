const webpack = require("webpack");

module.exports = {
    devServer:{
        proxy: {
            '/api': {
                target: 'http://localhost:8889', //api端口
                changeOrigin: true,   //允许跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {//vue下使用jquery
        //配置webpack
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: "jquery",
                $: "jquery"
            })
        ]
    },
}