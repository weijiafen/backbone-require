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
		console.log("进入输出验证码方法");
		var dtd=$.Deferred();
		$.post('/user/sendcode/:username',data,function(res){
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


	service.userRegister=function(data){
		console.log("进入userRegister方法");
		var dtd=$.Deferred();
		$.post('/user/register',data,function(res){
			console.log("done userRegister")
			if(isSuccess(res)){
				//执行成功会将res返回给then
				console.log(data);
				dtd.resolve(res);
			}else{
				dtd.reject();
			}	
			
		},"json")
		return dtd.promise();
	}


	service.userLogin=function(data){
		var dtd=$.Deferred();
		$.post('/user/login',data,function(res){
			console.log("done userLogin")
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
		$.get('/user/checkUserInfo',function(res){
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