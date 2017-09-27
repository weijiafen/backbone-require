define([
    "text!../tpl/main.html",

    // "../lib/require.js",
    // "../lib/jquery.min.js",
    // "../demoStyle/js/bootstrap.min.js",
    // "../demoStyle/js/hover-dropdown.js",
    // "../demoStyle/js/link-hover.js",
    // "../demoStyle/js/jquery.flexslider.js",
    // "../demoStyle/js/superfish.js",

    // "css!../demoStyle/css/bootstrap.min.css",
    "css!../lib/bootstrap/dist/css/bootstrap.css",


    "css!../demoStyle/assets/font-awesome/css/font-awesome.css",
    "css!../demoStyle/css/style.css",

    // "css!../demoStyle/css/theme.css",
    // "css!../demoStyle/css/bootstrap-reset.css",
    // "css!../demoStyle/css/flexslider.css",
    // "css!../demoStyle/assets/bxslider/jquery.bxslider.css",
    // "css!../demoStyle/css/animate.css",
    // "css!../demoStyle/assets/owlcarousel/owl.carousel.css",
    // "css!../demoStyle/assets/owlcarousel/owl.theme.css",
    // "css!../demoStyle/css/superfish.css",
    // "css!../demoStyle/css/component.css",
    // "css!../demoStyle/css/style-responsive.css",
    // "css!../demoStyle/css/parallax-slider/parallax-slider.css",
    // "css!../demoStyle/css/seq-slider/sequencejs-theme.sliding-horizontal-parallax.css",

    "css!../demoStyle/css/loading.css",







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




