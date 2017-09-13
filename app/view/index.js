define([
    "text!../tpl/main.html",
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
