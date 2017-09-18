define(function(require, exports, module) {
	"use strict";

	// External dependencies.
	var Backbone = require("backbone");
    var isMountIndex=false
	// Defining the application router.
	module.exports = Backbone.Router.extend({
		routes: {
			"": "index",
            "entry":"entry",
            "text":"text",
            "requireCss":"requireCss",
            "event":"eventDemo",
            "params/:orderId/:applyType":"params",//订单核准
            "myself":"myself",
            "register":"register",
            
		},
		index: function() {
            isMountIndex=true;
             $("#main").html('')
            require(['./view/index'],function(View){
                var view = new View();
                view.render();
            });
		},
		entry:function(){
            // $("#main").html('')
            if(!isMountIndex){
                this.index();
            }
			require(['./view/entry'],function(View){
                var view = new View();
                view.render();
            });
        },
        text:function(){
            // $("#main").html('')
            if(!isMountIndex){
                this.index();
            }
            require(['./view/template'],function(View){
                var view = new View();
                view.render();
            });
        },
        requireCss:function(){
            // $("#main").html('')
            if(!isMountIndex){
                this.index();
            }            require(['./view/requireCss'],function(View){
                var view = new View();
                view.render();
            });
        },
        eventDemo:function(){
            // $("#main").html('')
            if(!isMountIndex){
                this.index();
            }
            require(['./view/eventDemo'],function(View){
                var view = new View();
                view.render();
            });
        },
        params:function(orderId,type){
        
            // $("#main").html('')
            if(!isMountIndex){
                this.index();
            }
            require(['./view/params'],function(View){
                var view = new View();
                view.render({orderId:orderId,type:type});
            });
        },


        myself:function(){
            if(!isMountIndex){
                this.index();
            }
            require(['./view/myself'],function(View){
                var view = new View();
                view.render();
            });
        },
        
        register:function(){
            if(!isMountIndex){
                this.index();
            }
            require(['./view/register'],function(View){
                var view = new View();
                view.render();
            });
        },
        
	});
});