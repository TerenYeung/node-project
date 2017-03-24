const fs = require('fs')
const path = require('path')

fs.readFile('../public/img/profile.jpg','base64',(err,data)=>{
	console.log(data)
})