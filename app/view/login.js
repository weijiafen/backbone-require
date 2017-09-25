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
            verification_code = $('#code').val();
            if (username==''||password=='') {
                alert("请输出完整信息");
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
