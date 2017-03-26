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
	$.ajax({
		url:'/list.action',
		method: 'get',
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
