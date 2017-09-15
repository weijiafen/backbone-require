define([
    "text!../tpl/text.html",
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
            service.register().then(function(res){
                //register执行完之后才会执行then内的方法
                console.log(res)
            })
            
            $('#content').html(template.compile(tpl)({
                title:"template demo",
                list:["a","b","c"],
                type:1,
                data:{
                    name:"weijiafen"
                }
            }));
            
        }
    });
    return main;
});
