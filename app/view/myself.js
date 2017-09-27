define([
    "text!../tpl/myself.html",
    "../util/service",
    "text!../tpl/loading.html",
],function(tpl,service,loadingtpl) {
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
                bootbox.confirm({ 
                  size: "small",
                  message: "请输入完整的信息", 
                  callback: function(result){}
                })
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
                var sex;
                if (gender==1) {
                     sex = "男";

                }else if (gender==0) {
                     sex = "女";
                }


                /*修改个人中心各项内容*/
                /*这种方法会覆盖原本的样式，只能手写空格了*/

                $('#newSex').html('&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+sex);
                $('#newRealName').html('&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+realName);
                $('#newHeaderImg').html('&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+headerImg);
                $('#newAddr').html('&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+addr);
                $('#newEmail').html('&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+email);
                $('#newPhone').html('&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+phone);



            }
        },

        render: function(param) {
            $('#content').html(loadingtpl);
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
                var sex;
                if (gender==1) {
                     sex = "男";

                }else if (gender==0) {
                     sex = "女";
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
                    }

                }));

                if (sex == '男') {
                    $('#male').attr('checked', 'true');
                }else {
                    $('#female').attr('checked', 'true');
                }
            });
        }
    });
    return main;
});