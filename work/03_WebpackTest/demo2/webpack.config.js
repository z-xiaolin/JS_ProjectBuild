
// 引入插件
var CleanPlugin = require("clean-webpack-plugin")
var HtmlPlugin = require("html-webpack-plugin")

// 获取当前文件所在的文件夹的绝对路径
const path = require('path')
function resolve(dir) {
    return path.resolve(__dirname,dir)
}


// 配置
module.exports = {
    // 入口
    // entry:"./src/index.js",  // 入口js 的相对路径
    entry:{
        app:"./src/index.js"
    },
    // 出口
    output:{
        path: resolve("dist"),  // 所有打包生成的资源的基本路径(绝对)
        // filename:"static/js/bundle.js"
        filename:"static/js/[name].js"
    },
    // 模块转换器
    module:{
        rules:[
            // 处理 css模块
            {
                test:/\.css$/,  // 配置css样式文件
                use:["style-loader","css-loader"]
            },
            // 处理 图片模块
            {
                test: /\.(jpg|png|gif|svg)$/,
                // loader: "file-loader"
                loader: 'url-loader',  // 依赖于file-loader
                options: { // 一旦指定了options, 只能通过loader配置来指定loader, 且值只能是串
                    limit: 7000, // 限定图片大小的最小的值，小于限定值的图片会被转换为 base64，以字符串形式显示，减少请求次数
                    name: 'static/img/[name].[ext]'  // [name]代表文件  [ext]代表文件扩展名
                }
            }
        ]
    },

    // 插件
    plugins:[
        new CleanPlugin(["dist"]), // 清理dist文件夹
        new HtmlPlugin({  // 自动生成HTML页面，并在HTML页面中添加引入js文件
            template:"index.html",
            filename:"index.html", // 自动添加到dist的根目录下
            inject:true
        })
    ]
}