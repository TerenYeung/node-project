setTimeout(()=>{
	$.ajax({
		url:'/user.action',
		method: 'get',
		success: function(data){
			// debugger;
			var liStr = data.map((item)=>{
				return '<li>'+item+'</li>'
			}).join('')
			$('#root').html(liStr)
		},
		error: function(err){
			console.log(err)
		}
	})
	//模拟post
	$.ajax({
		url:'/list.action',
		method: 'post',
		headers:{
			'content-type':'application/json'
		},
		data:JSON.stringify([
			'name','teren'
		]),
		success: function(data){
			// debugger;
			var liStr = data.map((item)=>{
				return '<li>'+item+'</li>'
			}).join('')
			$('#list').html(liStr)
		},
		error: function(err){
			console.log(err)
		}
	})	
},1000)
