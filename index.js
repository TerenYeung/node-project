/*const http = require('http')
const PORT = 8888
const App = require('./app')
const server = new App()
http.createServer(server.initServer()).listen(PORT,()=>{
	console.log(`server listening on port ${PORT}`)
})*/

const http = require('http')
const PORT = 8888
const App = require('./app')
const server = new App()

http.createServer(server.initServer()).listen(PORT,()=>{
	console.log(`server listening on port ${PORT}`)
})