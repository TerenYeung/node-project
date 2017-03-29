/*
 * api server
 */

module.exports = (req)=>{
	let { url ,method } = req
	let apiMap = {
		'/list.action':['guitar','piano','violin'],
		'/user.action':['teren','man','chinese']
	}
	//过滤方法
	if(method.toLowerCase() == 'get'){
		return  Promise.resolve(apiMap[url])
	}else{
		//处理post B post stream <==> socket <==> S 
		//req -> readable stream eventEmitter
		return new Promise((resolve,reject)=>{
			let data = ''
			setTimeout(()=>{
				req.on('data',(chunk)=>{
					data += chunk
				}).on('end',()=>{
					resolve(JSON.parse(data))
				})	
			},1000)
		
		})
	}
}