// var proxyhttp = require('express-http-proxy');
var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
var bodyParser=require('body-parser')
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


app.get('/user/checkSaftyInfo',function(request,response){
    proxy('user/checkSaftyInfo',response);
})
app.post('/user/login',function(request,response){
    proxy('user/login',response,'POST');
})


var server = app.listen(11111, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});


function proxy(path,response,method,request){
    console.log(request.body)
	var opt={
		// host:"www.easy-mock.com",
        //path:`/mock/59b8a7b2e0dc663341a7ee9a/test/${path}`,
  
        // host:"http://172.20.10.2",

        host:"172.20.10.2",
        port:"8080",
        path:`testPage/${path}`,

        method:method||'GET'

        //Test4
	}
    if(method=='POST'){
        var body={
            "data":request.body
        }
        var bodyString = JSON.stringify(body);
        opt.headers={
            'Content-Type': 'application/json',
            'Content-Length': bodyString.length
        }
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