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
            username = $('#username').val();
            password = $('#password').val();
            if (username==''||password=='') {
                alert("请输出完整信息");
                return false;
            }else{
                var data = {
                    username : username,
                    password : password,
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
