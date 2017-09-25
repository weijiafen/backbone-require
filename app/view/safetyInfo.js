define([
    "text!../tpl/safetyInfo.html",
    "../util/service",
    ],function(tpl,service) {
    var Backbone = require('backbone');
    var template = require('art-template');



    var main = Backbone.View.extend({
        el: '#content',
        events:{
            "click #updateEmail":"updateEmail",
            "click #updatePayment":"updatePayment",
        },

        initialize:function () {
            // alert(123);
        },

        updateEmail:function(){
            var checkAnswer = $('.email .checkAnswer').val();
            if (checkAnswer==answer) {
                var writeEmail = $('#writeEmail').val();
                if(writeEmail!=''){
                    console.log("新安全邮箱是："+writeEmail);
                }else{
                    alert("请输入新安全邮箱地址");
                }
            }else{
                alert("安全不一致，请重新输入");
            }
        },

        updatePayment:function(){
            var checkAnswer = $('.pay .checkAnswer').val();
            if (checkAnswer==answer) {
                var writePayment = $('#writePayment').val();
                if(writePayment!=''){
                    console.log("新支付密码是："+writePayment);
                }else{
                    alert("请输入新支付密码");
                }
            }else{
                alert("安全问题不一致，请重新输入");
            }
        },




         render: function(param) {
            service.safetyInfo().then(function(res){
                safeData = res.data;

                id = safeData.id;
                question = safeData.question;
                answer = safeData.answer;
                safetyEmail = safeData.safetyEmail;
                safetyLevel = safeData.safetyLevel;
                paymentPassword =  safeData.paymentPassword;

                /*加密邮箱设置*/
                 frontEmail = safetyEmail.substring(0,3);
                 replaceEmail = safetyEmail.substring(3,8);
                 behindEmail = safetyEmail.substring(8);
                 becomeEmail = replaceEmail.replace(replaceEmail,"*****");
                 finalEmail = frontEmail + becomeEmail + behindEmail;


                 /*加密问题设置*/

                 coverAnswer = answer.replace(answer,"**************");
                 
                 /*加密支付密码*/
                 // if (coverPayment!='') {
                 //    coverPayment = paymentPassword.replace(paymentPassword,"*******");
                 // }
                 coverPayment = paymentPassword.replace(paymentPassword,"*******");
                 



                 $('#content').html(template.compile(tpl)({

                    data :{
                        id : id,
                        question:question,
                        answer:answer,
                        safetyEmail:safetyEmail,
                        safetyLevel:safetyLevel,
                        paymentPassword:paymentPassword,

                        finalEmail:finalEmail,
                        coverAnswer:coverAnswer,
                        coverPayment:coverPayment,
                    },
                }));
            });  

        },
    });
    return main;
});