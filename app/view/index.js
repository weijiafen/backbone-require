define([
    "text!../tpl/main.html",

    "css!../demoStyle/css/bootstrap.min.css",
    "css!../demoStyle/assets/font-awesome/css/font-awesome.css",
     "css!../demoStyle/css/style.css",
     

    "css!../demoStyle/css/theme.css",
    "css!../demoStyle/css/bootstrap-reset.css",
    "css!../demoStyle/css/flexslider.css",
    "css!../demoStyle/assets/bxslider/jquery.bxslider.css",
    "css!../demoStyle/css/animate.css",
    "css!../demoStyle/assets/owlcarousel/owl.carousel.css",
    "css!../demoStyle/assets/owlcarousel/owl.theme.css",
    "css!../demoStyle/css/superfish.css",
    "css!../demoStyle/css/component.css",
    "css!../demoStyle/css/style-responsive.css",
    "css!../demoStyle/css/parallax-slider/parallax-slider.css",




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
