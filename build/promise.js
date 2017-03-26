//typeof Promise == 'Function'
//prototype ==> then/catch
//静态方法 ==> all/race/resolve/reject

//step 1

let promise = new Promise((resolve,reject)=>{
	// resolve(1)
	reject(2)
	//setTimeout(resolve,1000,'hello world')
})
console.log(promise)
//Promise { 1 }
//Promise { <rejected> 2 }

//then可接受两个参数，第一个参数是resolve回调,第二个是reject回调

//1、将这些回调函数存入处理队列queue
//2、如果promise已经是fulfilled或者reject的状态，autoRun
promise.then(success=>{
	console.log(`then success is ${success}`)
},error=>{
	console.log(`then error is ${error}`)
})
//.then(another=>{
//	console.log(`another then is ${another}`)
//})//第二个then无效

var p = promise.catch(error=>{
	console.log(`another error is ${error}`)
})
console.log(p)

var p1 = Promise.resolve(1)
var p2 = Promise.resolve(p1)
var p3 = Promise.resolve({
	then:function(resolve,reject){
		resolve(2)
	}
})
console.log(p1)
console.log(p2)
p3.then(val=>console.log(val))