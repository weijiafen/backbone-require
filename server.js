// var proxyhttp = require('express-http-proxy');
var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
var request2 = require('request');
var bodyParser=require('body-parser')
//使用的mock方法选项
var proxy=easyMockproxy;
// var proxy=requestProxy;
app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));
app.use('/app', express.static('app'));
app.use('/index.html', express.static('index.html'));


app.get('/mock',function(request,response){
	proxy('mock',response);
})

app.post('/user/sendcode/:username',function(request,response){
    proxy(`user/sendcode/${request.params.username}`,response,'POST');
})
app.post('/user/register',function(request,response){
    proxy('user/register',response,'POST',request);
})


app.get('/user/checkUserInfo',function(request,response){
    proxy('user/checkUserInfo',response);
})
app.post('/user/login',function(request,response){
    proxy('user/login',response,'POST');
})

app.get('/user/safetyInfo',function(request,response){
    proxy('user/safetyInfo',response);
})


var server = app.listen(11111, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});


function easyMockproxy(path,response,method,request){
    // console.log(request.body)
	var opt={
		host:"www.easy-mock.com",
        path:`/mock/59b8a7b2e0dc663341a7ee9a/test/${path}`,
        method:method||'GET'
	}
	var content = '';
	var req = http.request(opt, function(res) {  
        res.on('data',function(body){  
            console.log('return');  
            content+=body;  
        }).on("end", function () {  
            response.writeHead(200, {'Content-Type': 'application/json'});  
            response.write(content);  
            response.end();  
        });  
    }).on('error', function(e) {  
        console.log("Got error: " + e.message);  
    });  
    req.end(); 
}
function requestProxy(path,response,method,request){
    var ljUrl=`http://172.20.10.2:8080/${path}`;
    var wjfUrl=`http://10.9.33.109:11112/${path}`
    //使用的url选项
    var useUrl=ljUrl
    var requestConfig={
        url:useUrl,
        method:method||'GET',
        json:true,
        headers:{
            'Content-Type': 'application/json'
        }
    }
    if(method=='POST'){
        requestConfig.body=request.body
        // requestConfig.body=JSON.stringify(request.body)
        request2(requestConfig,function(r,resp,body){
            console.log("resp")
            response.writeHead(200, {'Content-Type': 'application/json'});  
            response.write(body);  
            response.end();
        })
    }else{
        request2(useUrl,function(r,resp,body){
            console.log("resp")
            response.writeHead(200, {'Content-Type': 'application/json'});  
            response.write(body);  
            response.end();
        })
    }
    
}