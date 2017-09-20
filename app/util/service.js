define([],function(){
	var service={};
	var isSuccess=function(res){
		if(res.status!=0){
			alert(res.msg)
			return false;
		}
		return true;
	}
	service.sendcode=function(data){
		var dtd=$.Deferred();
		$.post('/user/sendcode/username',data,function(res){
			console.log("done sendcode")
			if(isSuccess(res)){
				//执行成功会将res返回给then
				
				dtd.resolve(res);
				console.log(res.msg);
			}else{
				dtd.reject();
			}	
			
		})
		return dtd.promise();
	}


	service.register=function(data){
		var dtd=$.Deferred();
		$.post('/register',data,function(res){
			console.log("done register")
			if(isSuccess(res)){
				//执行成功会将res返回给then
				console.log(data);
				dtd.resolve(res);
			}else{
				dtd.reject();
			}	
			
		})
		return dtd.promise();
	}

	service.mock=function(){
		var dtd=$.Deferred();
		$.get('/mock',function(res){
			console.log("done mock")
			if(isSuccess(res)){
				//执行成功会将res返回给then
				console.log(res.msg);
				dtd.resolve(res);
			}else{
				dtd.reject();
			}
		})
		return dtd.promise();
	}

	service.info=function(){
		var dtd=$.Deferred();
		$.get('/info',function(res){
			console.log("done info")
			if(isSuccess(res)){
				//执行成功会将res返回给then
				dtd.resolve(res);
				console.log(res.data);
				// infoData = res.data;
			}else{
				dtd.reject();
			}
		})
		return dtd.promise();
	}




	return service;
})