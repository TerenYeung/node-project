
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

//流式操作
//req -> url-parse -> api -> static-server -> app下的index.js

const fs = require('fs')
const path = require('path')
//发现是文件夹，首先查找pacckage.json里面的main，如果没有直接找js文件
const staticServer = require('./static-server')
const apiServer = require('./api')
const urlParser = require()
class App{
	constructor(){}
	initServer(){
		//some code here
		return (req,res)=>{
			// let { url ,method} = req
			//DRY,don't repeat yourself
			//const staticPrefix = path.resolve(process.cwd(),'public')
			//所有以action结尾的url，认为他是ajax
			
			//课后作业：1.如果把apiServer和staticServer链接起来
			/*2. apiServer.then(()=>{
				staticServer()	
			})
			*/

			apiServer(req).then(val=>{
				if(!val){
					//Promise
					return staticServer(req)
				}else{
					return val
				}				
			}).then(val=>{
				let base = {'X-powered-by':'Node.js'}
				let body = ''
				//array
				if( val instanceof Buffer ){
					body = val
				}else{
					body = JSON.stringify(val)
					let finalHeader = Object.assign(base,{
						'Content-Type':'application/json'
					})
					res.writeHead(200,'resolve ok',finalHeader)
				}
				res.end(body)				
			})


			//返回字符串或buffer
			/*let body = ''
			let headers = {}
			if(url.match('action')){
				apiServer(url).then(val=>{
					body = JSON.stringify(val)
					headers = {
						'Content-Type':'application/json'
					}
						let finalHeader = Object.assign(headers,{'X-powered-by':'Node.js'})
						res.writeHead(200,'resolve ok',finalHeader)
						res.end(body)						
				})									
			}else{
				//不然的话就是静态资源
				body = staticServer(url).then(body=>{
					let finalHeader = Object.assign(headers,{'X-powered-by':'Node.js'})
					res.writeHead(200,'resolve ok',finalHeader)
					res.end(body)					
				})
			}*/
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