/*
 * @Author terenyueng
 * 静态资源服务器
 */
const fs = require('fs')
const path = require('path')
let getPath = (url)=>{
	return path.resolve(process.cwd(),'public',`.${url}`)
}
let staticFunc = (url)=>{
	if(url == '/'){
		url = '/index.html'
	}
	// let _path = path.resolve(staticPrefix,`.${url}`)
	let _path = getPath(url)
	let body = ''
	try{
		body = fs.readFileSync(_path)
	}catch(err){
		body = 'NOT FOUND'
	}
	return body
	/*fs.readFile(_path,(err,data)=>{
		if(err){
			data = 'NOT FOUND'
		}
		res.end(data)
	})*/				
}

module.exports = staticFunc