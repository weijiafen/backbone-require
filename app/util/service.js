define([],function(){
	var service={};
	var isSuccess=function(res){
		if(res.status!=0){
			alert(res.msg)
			return false;
		}
		return true;
	}
	service.register=function(){
		var dtd=$.Deferred();
		$.post('/register',function(res){
			console.log("done")
			if(isSuccess(res)){
				//执行成功会将res返回给then
				dtd.resolve(res);
			}else{
				dtd.reject();
			}
			
			
		})
		return dtd.promise();
	}
	return service;
})