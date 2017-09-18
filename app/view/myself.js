define([
    "text!../tpl/myself.html",
    "../util/service",
    ],function(tpl,service) {
    var Backbone = require('backbone');
    var template = require('art-template');
    var main = Backbone.View.extend({

        el: '#content',
       
        initialize:function () {
            // alert(123);
        },

        render: function(param) {
            var infoData;
            
            service.info().then(function(res){
                 infoData = res.data;
                 // console.log(infoData);
                 var id = infoData.id;
                 var gender = infoData.gender;
                 var real_name = infoData.real_name;
                 var header_img = infoData.header_img;
                 var email = infoData.email;
                 var addr = infoData.addr;
                 var phone = infoData.phone;


                 $('#content').html(template.compile(tpl)({

                    data :{
                        id : id,
                        gender:gender,
                        real_name:real_name,
                        header_img:header_img,
                        email:email,
                        addr:addr,
                        phone:phone,
                    } 

                }));
            });


        }
    });
    return main;
});