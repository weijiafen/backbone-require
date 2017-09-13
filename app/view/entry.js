define([
    "text!../tpl/entry.html",
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
