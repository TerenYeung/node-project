/*
 * api server
 */

module.exports = (url)=>{
	let apiMap = {
		'/list.action':['guitar','piano','violin'],
		'/user.action':['teren','man','chinese']
	}
	return  Promise.resolve(apiMap[url])
}