define([
    "text!../tpl/requireCss.html",
    "css!../style/test.css"
    ],function(tpl) {
    var Backbone = require('backbone');
    var main = Backbone.View.extend({
        el: '#content',
        initialize:function () {
            // alert(123);
        },
        render: function(param) {
            $('#content').html(tpl);
            
        }
    });
    return main;
});
