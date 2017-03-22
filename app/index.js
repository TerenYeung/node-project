
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
class App{
	constructor(){}
	initServer(){
		//some code here
		return (req,res)=>{
			let {url} = req // ==> let url = req.url
			/*let staticFunc = (url) = >{
				if(url==''){
					url = '/index.html'
				}
				fs.readFile(`./public${url}`,'utf-8',(err,data)=>{
					res.end(data)
				})
			}*/
			let getPath = (url)=>{
				return path.resolve(process.cwd(),`/public${url}`)
			}
			staticFunc(url)
			// if(url == '/css/index.css'){
			// 	fs.readFile('./publick/css/index.css','utf-8',(err,data)=>{
			// 		res.end(data)
			// 	})
			// }
			// if(url == '/js/index.js'){
			// 	fs.readFile('./publick/css/index.css','utf-8',(err,data)=>{
			// 		res.end(data)
			// 	})
			// }
			// if(url == '/'){
			// 	fs.readFile('./publick/index.html','utf-8',(err,data)=>{
			// 		res.end(data)
			// 	})
			// }			
		}
	}
}

module.exports = App