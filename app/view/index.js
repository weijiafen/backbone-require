define([
    "text!../tpl/main.html",
    "css!../style/animate.css",
    // "css!../style/icomoon.css",
    // "css!../style/simple-line-icons.css",
    // "css!../style/bootstrap.css",
    // "css!../style/css/style.css",
    "css!../style/menuStyle.css",
    ],function(tpl) {
    var Backbone = require('backbone');
    var main = Backbone.View.extend({
        el: '#main',
        initialize:function () {
            // alert(123);
        },
        render: function(param) {
            $('body').html(tpl);
        }
    });
    return main;
});
