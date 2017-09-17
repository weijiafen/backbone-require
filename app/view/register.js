define([
    "text!../tpl/register.html",
    "../util/service",
    "css!../style/loginStyle.css",
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
             if($('.pass').val()==0 || $('.username').val()==0 || $('.conpass').val()==0){
                    alert("请输入完整信息");
                    return false;
                }else if ($('.pass').val()!=$('.conpass').val()) {
                    alert("密码前后不一致，请重新输入");
                    return false;
                }else{ 
                    var data= {
                                username : $('.username').val(),
                                password : $('.pass').val(),
                                conpassword : $('.conpass').val()
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