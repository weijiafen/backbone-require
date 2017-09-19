define([
    "text!../tpl/register.html",
    "../util/service",
    // "css!../style/loginStyle.css",
    ],function(tpl,service) {
    var Backbone = require('backbone');
    var main = Backbone.View.extend({
        el: '#content',
        events:{
            "click #login-button":"submit"
        },
        initialize:function () {
            // alert(123);
        },


        submit: function(){
            username = $('#username').val();
            pass = $('#pass').val();
            conpass = $('#conpass').val();
            phonecode = $('#phonecode').val();
             if(username=='' || pass=='' || conpass=='' || phonecode==''){
                    alert("请输入完整信息");
                    return false;
                }else if (pass!=conpass) {
                    alert("密码前后不一致，请重新输入");
                    return false;
                }else{ 
                    var data= {
                                username : username,
                                password : pass,
                                conpassword : conpass,
                                phonecode : phonecode,
                            };
                        service.register(data);
                    }
        },




        render: function(param) {
            $('#content').html(tpl);
        },
    });
    return main;
});