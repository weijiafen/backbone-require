define([
    "text!../tpl/userPages/login.html",
    "../util/service",
    ],function(tpl,service) {
    var Backbone = require('backbone');
    var main = Backbone.View.extend({
        el: '#content',
        events:{
            "click #loginSubmit":"submit",
        },
        initialize:function () {
            // alert(123);
        },


        submit:function(){
            var username = $('#username').val();
            var password = $('#password').val();
            var verification_code = $('#code').val();
            if (username==''||password==''||verification_code=='') {
                // alert("请输出完整信息");
                bootbox.confirm({ 
                  size: "small",
                  message: "请输入完整信息", 
                  callback: function(result){}
                })
                
                return false;
            }else{
                var data = {
                    username : username,
                    password : password,
                    verification_code:verification_code,
                };
                service.userLogin(data);
            }

        },

        render: function(param) {
            $('#content').html(tpl);
        }
    });
    return main;
});
