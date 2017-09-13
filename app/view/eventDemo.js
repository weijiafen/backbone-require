define([
    "text!../tpl/event.html",
    ],function(tpl) {
    var Backbone = require('backbone');
    var main = Backbone.View.extend({
        el: '#content',
        events:{
            "click .btn":"clickBtn"
        },
        initialize:function () {
            // alert(123);
        },
        render: function(param) {
            $('#content').html(tpl);
        },
        clickBtn:function(){
            alert("click this button")
        }
    });
    return main;
});
