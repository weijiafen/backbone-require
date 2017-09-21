// var proxyhttp = require('express-http-proxy');
var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
app.use('/app', express.static('app'));
app.use('/index.html', express.static('index.html'));


app.get('/mock',function(request,response){
	proxy('mock',response);
})

app.post('/user/sendcode/:username',function(request,response){
    proxy(`user/sendcode/${request.params.username}`,response,'POST');
})
app.post('/user/register',function(request,response){
    proxy('user/register',response,'POST');
})
app.get('/info',function(request,response){
    proxy('/info',response);
})
app.post('/user/login',function(request,response){
    proxy('user/login',response,'POST');
})


var server = app.listen(11111, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});


function proxy(path,response,method){
	var opt={
		host:"www.easy-mock.com",
        path:`/mock/59b8a7b2e0dc663341a7ee9a/test/${path}`,
        // host:"http://172.20.10.2",
        // port:"8080",
        // path:`${path}`,
        method:method||'GET'
        //Test4
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