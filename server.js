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
var server = app.listen(11111, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
function proxy(path,response){
	var opt={
		host:"www.easy-mock.com",
        path:`/mock/59b8a7b2e0dc663341a7ee9a/test/${path}`
        //测试
	}
	var content = '';
	var req = http.request(opt, function(res) {  
        res.on('data',function(body){  
            console.log('return');  
            content+=body;  
        }).on("end", function () {  
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(content);  
            response.end();  
        });  
    }).on('error', function(e) {  
        console.log("Got error: " + e.message);  
    });  
    req.end(); 
}