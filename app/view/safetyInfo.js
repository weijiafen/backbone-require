define([
    "text!../tpl/safetyInfo.html",
    "../util/service",
    ],function(tpl,service) {
    var Backbone = require('backbone');
    var template = require('art-template');



    var main = Backbone.View.extend({
        el: '#content',
        events:{
            "click #safeSubmit":"safeSubmit",
            "click #sendEmail":"sendEmail",
        },

        initialize:function () {
            // alert(123);
        },


        safeSubmit:function(){
            var checkAnswer = $('#checkAnswer').val();
            if (checkAnswer==answer) {
                alert("密码一致，等待页面更新");
            }else{
                alert("密码不一致，请重新输入");
            }
        },

        sendEmail:function(){
            var writeEmail = $('#writeEmail').val();
            if (safety_email==writeEmail) {
                alert("邮箱一致，等待页面更新");
            }else{
                alert("邮箱不一致emmm");
            }
        },


         render: function(param) {





            service.safetyInfo().then(function(res){
                safeData = res.data;

                id = safeData.id;
                question = safeData.question;
                answer = safeData.answer;
                safety_email = safeData.safety_email;
                safety_level = safeData.safety_level;

                /*加密邮箱设置*/
                 frontEmail = safety_email.substring(0,3);
                 replaceEmail = safety_email.substring(3,8);
                 behindEmail = safety_email.substring(8);
                 becomeEmail = replaceEmail.replace(replaceEmail,"*****");
                 finalEmail = frontEmail + becomeEmail + behindEmail;


                 $('#content').html(template.compile(tpl)({

                    data :{
                        id : id,
                        question:question,
                        answer:answer,
                        safety_email:safety_email,
                        safety_level:safety_level,
                        finalEmail:finalEmail,
                    },



                }));

            //  frontEmail = safety_email.substring(0,3);
            //  replaceEmail = safety_email.substring(3,8);
            //  behindEmail = safety_email.substring(8);
            //  becomeEmail = replaceEmail.replace(replaceEmail,"*****");
            //  finalEmail = frontEmail + becomeEmail + behindEmail;
            // console.log(finalEmail);



            });  

        },
    });
    return main;
});