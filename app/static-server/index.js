let getPath
let staticFunc = (url)=>{
	if(url==''){
		url = '/index.html'
	}
	let _path = getPath(url)
	fs.readFile(_path,(err,data)=>{
		
	})
}