define([
    "text!../tpl/safetyInfo.html",
    "../util/service",
    "text!../tpl/loading.html",
    ],function(tpl,service,loadingtpl) {
    var Backbone = require('backbone');
    var template = require('art-template');



    var main = Backbone.View.extend({
        el: '#content',
        events:{
            "click #updateEmail":"updateEmail",
            "click #updatePayment":"updatePayment",
            "click #perfectSafetyInfo":"perfectSafetyInfo",
        },

        initialize:function () {
            // alert(123);
        },

        updateEmail:function(){
            var checkAnswer = $('.email .checkAnswer').val();
            if (checkAnswer==answer) {
                var writeEmail = $('#writeEmail').val();
                if(writeEmail!=''){
                    console.log("新安全邮箱是："+writeEmail); //放入更新邮箱的方法

                }else{
                    bootbox.confirm({ 
                      size: "small",
                      message: "请输入新安全邮箱地址", 
                      callback: function(result){}
                    })
                }
            }else{
                bootbox.confirm({ 
                  size: "small",
                  message: "安全答案不一致，请重新输入", 
                  callback: function(result){}
                })
            }
        },

        updatePayment:function(){
            var checkAnswer = $('.pay .checkAnswer').val();
            if (checkAnswer==answer) {
                var writePayment = $('#writePayment').val();
                if(writePayment!=''){
                    console.log("新支付密码是："+writePayment);  //放入更新支付密码的方法
                }else{
                    bootbox.confirm({ 
                      size: "small",
                      message: "请输入新支付密码", 
                      callback: function(result){}
                    })
                }
            }else{
                bootbox.confirm({ 
                  size: "small",
                  message: "安全答案不一致，请重新输入", 
                  callback: function(result){}
                })
            }
        },

        perfectSafetyInfo:function(){

            var setQuestion = $('#setQuestion').val();
            var setAnswer = $('#setAnswer').val();
            var setSafetyEmail = $('#setSafetyEmail').val();
            var setPaymentPassword = $('#setPaymentPassword').val();
            var setConpaymentPassword = $('#setConpaymentPassword').val();

            if (setQuestion==''||setAnswer==''||setSafetyEmail==''||setPaymentPassword==''||setConpaymentPassword=='') {
                bootbox.confirm({ 
                  size: "small",
                  message: "请输入完整信息", 
                  callback: function(result){}
                })
                return false;
            }else{
                if (setPaymentPassword!=setConpaymentPassword) {
                    bootbox.confirm({ 
                      size: "small",
                      message: "密码和确认密码不一致", 
                      callback: function(result){}
                    })
                    return false;
                }else{
                    var data = {
                        question : setQuestion,
                        answer : setAnswer,
                        safetyEmail : setSafetyEmail,
                        paymentPassword : setPaymentPassword,
                    };
                    service.perfectSafetyInfo(data);
                    window.location.href="#/";

                }
            }

        },




         render: function(param) {
             $('#content').html(loadingtpl);
            service.safetyInfo().then(function(res){
                var safeData = res.data;

                var id = safeData.id;
                var question = safeData.question;
                    answer = safeData.answer;
                var safetyEmail = safeData.safetyEmail;
                var safetyLevel = safeData.safetyLevel;
                var paymentPassword =  safeData.paymentPassword;

                /*加密邮箱设置*/
                 var frontEmail = safetyEmail.substring(0,3);
                 var replaceEmail = safetyEmail.substring(3,8);
                 var behindEmail = safetyEmail.substring(8);
                 var becomeEmail = replaceEmail.replace(replaceEmail,"*****");
                 var finalEmail = frontEmail + becomeEmail + behindEmail;

                  /*星星个数*/
                  function repeat(str , n){
                    return new Array(n+1).join(str);
                  }

                 /*加密问题设置*/
                 var answerLength = answer.length;
                 var coverAnswer = repeat("*", answerLength);

                 
                 /*加密支付密码*/
                 var paymentLength = paymentPassword.length;
                 var coverPayment = repeat("*", paymentLength);

                 /*安全级别设置*/
                 var safeFactor;
                 var length;
                 if (safetyLevel==0) {
                    safeFactor = '无';
                 }else if (safetyLevel == 1) {
                    safeFactor = '低';
                    length = '30%';
                 }else if (safetyLevel == 2) {
                    safeFactor = '中';
                    length = '60%';
                 }else if (safetyLevel == 3) {
                    safeFactor = '高';
                    length = '100%';
                 }

                 $('#content').html(template.compile(tpl)({

                    data :{
                        id : id,
                        question:question,
                        answer:answer,
                        safetyEmail:safetyEmail,
                        safeFactor:safeFactor,
                        paymentPassword:paymentPassword,

                        finalEmail:finalEmail,
                        coverAnswer:coverAnswer,
                        coverPayment:coverPayment,
                        length:length,
                    },
                }));

                 // 设置安全页面初次输入页面
                 if (safetyLevel==1||safetyLevel==2||safetyLevel==3) {
                    $('#unsafe').hide();
                    $('#safe').show();
                   }else{
                    $('#safe').hide();
                    $('#unsafe').show();
                   }

            });  

        },
    });
    return main;
});