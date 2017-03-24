
/*
* 主要核心逻辑入口
 */

/*const fs = require('fs')

class App {
	constructor(){}
	initServer(){

		//这里可以进行初始化工作


		//fs是相对于process.cwd()的路径,process.cwd()是node的启动目录
		return (req,res)=>{
			fs.readFile('./public/index.html','utf8',(err,data)=>{
				res.end(data)
			})			
		}
	}
}


module.exports = App*/

const fs = require('fs')
const path = require('path')
//发现是文件夹，首先查找pacckage.json里面的main，如果没有直接找js文件
const staticServer = require('./static-server')
console.log(staticServer)
class App{
	constructor(){}
	initServer(){
		//some code here
		return (req,res)=>{
			let { url } = req
			//DRY,don't repeat yourself
			//const staticPrefix = path.resolve(process.cwd(),'public')
			let body = staticServer(url)
			res.end(body)
			/*
			if(url == '/css/index.css'){
				fs.readFile('./public/css/index.css','utf8',(err,data)=>{
					res.end(data)
				})
			}
			if(url == '/js/index.js'){
				fs.readFile('./public/js/index.js','utf8',(err,data)=>{
					res.end(data)
				})
			}
			//fs相对于node的启动目录，即process.cwd()
			if(url == '/'){
				fs.readFile('./public/index.html','utf8',(err,data)=>{
					res.end(data)
				})				
			}*/
		}
	}
}

module.exports = App