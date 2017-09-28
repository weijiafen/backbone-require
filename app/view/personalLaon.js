define([
    "text!../tpl/userPages/personalLaon.html",
    "../util/service",
    ],function(tpl,service) {
    var Backbone = require('backbone');
    var main = Backbone.View.extend({
        el: '#content',
        events:{
            "click #plan":"plan",
        },
        initialize:function () {
            // alert(123);
        },

        plan:function(){
            service.checkLoanPlan();
        },

        render: function(param) {
            $('#content').html(tpl);
        }
    });
    return main;
});
