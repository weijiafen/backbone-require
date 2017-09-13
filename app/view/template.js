define([
    "text!../tpl/text.html",
    ],function(tpl) {
    var Backbone = require('backbone');
    var template = require('art-template');
    var main = Backbone.View.extend({
        el: '#content',
        initialize:function () {
            // alert(123);
        },
        render: function(param) {
            $.get('/mock',function(){})
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
