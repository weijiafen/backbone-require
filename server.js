// var proxyhttp = require('express-http-proxy');
var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
var request2 = require('request');
var bodyParser=require('body-parser')
//使用的mock方法选项
// var proxy=easyMockproxy;
var proxy=requestProxy;
app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

app.use('/app', express.static('app'));
app.get('/index.html', function(request,response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(__dirname + '/index.html', {flag: 'r+', encoding: 'utf8'}, function (err, data) {
        if(err) {
         console.error(err);
         return;
        }
        response.end(data);
    });
});


app.get('/mock',function(request,response){
	proxy('mock',response);
})

app.post('/user/sendcode/:username',function(request,response){
    proxy(`user/sendcode/${request.params.username}`,response,'POST',request);
})

app.post('/user/register',function(request,response){
    proxy('user/register',response,'POST',request);
})


app.get('/user/checkUserInfo',function(request,response){
    proxy('user/checkUserInfo',response);
})

app.post('/user/perfectInfo',function(request,response){
    proxy('user/perfectInfo',response,'POST',request);
})


app.post('/user/login',function(request,response){
    proxy('user/login',response,'POST',request);
})

app.get('/user/checkSafetyInfo',function(request,response){
    proxy('user/checkSafetyInfo',response);
})

app.post('/user/perfectSafetyInfo',function(request,response){
    proxy('user/perfectSafetyInfo',response,'POST',request);
})

app.post('/personalLoan/checkLoanPlan',function(request,response){
    proxy('personalLoan/checkLoanPlan',response,'POST',request);
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
    var wjfUrl=`http://10.9.33.109:11112/${path}`;
    var maooCoffeeUrl = `http://192.168.1.176:8080/${path}`;
    //使用的url选项
    // var useUrl=ljUrl
    var useUrl = wjfUrl;
    var requestConfig={
        url:useUrl,
        method:method||'GET',
        json:true,
        headers:{
            'Content-Type': 'application/json',
            'cookie':request.headers.cookie
        }
    }
    
    if(method=='POST'){
        requestConfig.body=request.body
        // requestConfig.body=JSON.stringify(request.body)
        request2(requestConfig,function(r,resp,body){
            console.log("resp")
            console.log(resp.headers)

            response.writeHead(200, {
                'Content-Type': 'application/json',
                'set-cookie':resp.headers['set-cookie']
            });  
            response.headers=resp.headers;
            response.write(JSON.stringify(body));
            // response.write(""+body);  
             // response.write("success");
            response.end();
        })
    }else{
        request2(useUrl,function(r,resp,body){
            console.log("resp2")
            console.log(body)
            response.writeHead(200, {
                'Content-Type': 'application/json',
                'set-cookie':resp.headers['set-cookie']
            });  
            response.write(JSON.stringify(body));
            response.end();
        })
    }
    
}