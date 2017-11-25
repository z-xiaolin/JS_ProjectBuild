// 引入 js 文件
import {square,cube} from "./js/math"

// 引入 css文件
import "./assets/css/style.css"

// 引入 img 文件（图片）
import logo from "./assets/img/logo.jpg"

// 引入 json 文件
import data from "./assets/json/data.json"


// 使用模块
document.write(`3的平方是：${square(3)} <br> 3的立方是：${cube(3)} <br>`)
document.write(JSON.stringify(data))