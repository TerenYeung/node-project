
/*
* 主要核心逻辑入口
 */

/*const fs = require('fs')

class App {
	constructor(){}
	initServer(){

		//这里可以进行初始化工作


		//fs是相对于process.cwd()的路径
		return (req,res)=>{
			fs.readFile('./public/index.html','utf8',(err,data)=>{
				res.end(data)
			})			
		}
	}
}


module.exports = App*/

const fs = require('fs')

class App{
	constructor(){}
	initServer(){
		//some code here
		return (req,res)=>{
			console.log(process.cwd())
			fs.readFile('./public/index.html','utf-8',(err,data)=>{
				res.end(data)
			})
		}
	}
}

module.exports = App