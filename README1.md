发包
    发送打包之后的文件夹 dist

静态服务器
    serve  // 本机运行打包之后的项目
        npm install serve -g
    运行命令 serve dist

    实现live-reload   自动打包 自动刷新页面
        npm install webpack-dev-server
        "scripts": {
          "dev": "webpack-dev-server",
        }
        运行: npm run dev
