define([
    "text!../tpl/params.html",
    ],function(tpl) {
    var Backbone = require('backbone');
    var template = require('art-template');
    var main = Backbone.View.extend({
        el: '#content',
        initialize:function () {
            // alert(123);
        },
        render: function(param) {
            $('#content').html(template.compile(tpl)(param));
        }
    });
    return main;
});
