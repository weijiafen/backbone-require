define([
    "text!../tpl/myself.html",
    "../util/service",
    ],function(tpl,service) {
    var Backbone = require('backbone');
    var template = require('art-template');
    var main = Backbone.View.extend({

        el: '#content',
        events:{
            "click #perfectInfo":"perfectInfo",
            
        },


       
        initialize:function () {
            // alert(123);

            
        },


        perfectInfo:function(){

            
            var id = $("#id").val();
            var gender = $("input[type='radio']:checked").val();
            var realName = $("#realName").val();
            var headerImg = $("#headerImg").val();
            var addr = $("#addr").val();
            var email = $("#email").val();
            var phone = $("#phone").val();

            if (id==''||gender==''||realName==''||headerImg==''||addr==''||email==''||phone=='') {
                alert("请输出完整信息");
                return false;
            }else{
                var data = {
                    id : id,
                    gender : gender,
                    realName : realName,
                    headerImg : headerImg,
                    addr : addr,
                    email : email,
                    phone : phone,
                };
                service.perfectInfo(data);
                $('#alterInfo').modal('hide');
                // window.location.reload();

            }
        },


        render: function(param) {           
            service.info().then(function(res){
                 var infoData = res.data;
                 // console.log(infoData);
                 var id = infoData.id;
                 var gender = infoData.gender;
                 var realName = infoData.realName;
                 var headerImg = infoData.headerImg;
                 var email = infoData.email;
                 var addr = infoData.addr;
                 var phone = infoData.phone;

                 if (gender==1) {
                    var sex = "男";
                    
                     }else if (gender==0) {
                        var sex = "女"; 
                     }

                 $('#content').html(template.compile(tpl)({
                    data :{
                        id : id,
                        sex:sex,
                        realName:realName,
                        headerImg:headerImg,
                        email:email,
                        addr:addr,
                        phone:phone,
                    } ,
                }));
                 if (sex == '男') {
                    $('#male').attr('checked', 'true');
                 }else if (true) {
                    $('#female').attr('checked', 'true');
                 }
            });
        }
    });
    return main;
});