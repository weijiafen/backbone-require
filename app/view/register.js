define([
    "text!../tpl/userPages/register.html",
    "../util/service",
    ],function(tpl,service) {
    var Backbone = require('backbone');
    var main = Backbone.View.extend({
        el: '#content',
        events:{
            "click #submit":"submit",
            "click #send":"sendcode"
        },
        initialize:function () {
            // alert(123);
        },

        sendcode: function(){
            username = $('#username').val();
            if (username=='') {
                alert("请输入手机号码");
            }else{
                var data={
                    username : username,
                };
                // console.log("即将进入service");
                service.sendcode(data);
            }
        },


        submit: function(){
            username = $('#username').val();
            pass = $('#pass').val();
            conpass = $('#conpass').val();
            verification_code = $('#verification_code').val();
             if(username=='' || pass=='' || conpass=='' || verification_code==''){
                    alert("请输入完整信息");
                    return false;
                }else if (pass!=conpass) {
                    alert("密码前后不一致，请重新输入");
                    return false;
                }else{ 
                    var data = {
                                username : username,
                                password : pass,
                                verification_code : verification_code,
                            };
                        service.userRegister(data);
                        // window.location.href = "#/";
                    }


        },

        render: function(param) {
            $('#content').html(tpl);
        },
    });
    return main;
});