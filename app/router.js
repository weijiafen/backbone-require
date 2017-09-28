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
            "login":"login",
            "regulation":"regulation",
            "comRegulation":"comRegulation",
            "record":"record",
            "safetyInfo":"safetyInfo",
            "loading":"loading",
            "personalLaon":"personalLaon",
            "comLoan":"comLoan",
            "borrow":"borrow",
            "borrProcess":"borrProcess",

            
		},
		index: function(secondMenu) {
            var dtd=$.Deferred();
            if(!isMountIndex||!secondMenu){
                $("#main").html('')
                require(['./view/index'],function(View){
                    var view = new View();
                    view.render();
                    dtd.resolve();
                    isMountIndex=true;
                });
            }else{
                dtd.resolve();
            }
            
            return dtd.promise();
		},
		entry:function(){
            this.index(1).then(function(){
                require(['./view/entry'],function(View){
                    var view = new View();
                    view.render();
                });
            })
			
        },
        text:function(){
            // $("#main").html('')
            this.index(1).then(function(){
                require(['./view/template'],function(View){
                    var view = new View();
                    view.render();
                });
            })
            
        },
        requireCss:function(){
            this.index(1).then(function(){
                require(['./view/requireCss'],function(View){
                    var view = new View();
                    view.render();
                });
            })
            
        },
        eventDemo:function(){
            this.index(1).then(function(){
                require(['./view/eventDemo'],function(View){
                    var view = new View();
                    view.render();
                });
            })
            
        },
        params:function(orderId,type){
            this.index(1).then(function(){
                require(['./view/params'],function(View){
                    var view = new View();
                    view.render({orderId:orderId,type:type});
                });
            })
            
        },

        myself:function(){
            this.index(1).then(function(){
                require(['./view/myself'],function(View){
                    var view = new View();
                    view.render();
                });
            })
            
        },
        
        register:function(){
            this.index(1).then(function(){
                require(['./view/register'],function(View){
                    var view = new View();
                    view.render();
                }); 
            })
            
        },

        login:function(){
            this.index(1).then(function(){
                require(['./view/login'],function(View){
                    var view = new View();
                    view.render();
                });
            })
            
        },

        regulation:function(){
            this.index(1).then(function(){
                require(['./view/regulation'],function(View){
                    var view = new View();
                    view.render();
                });
            })
            
        },
        comRegulation:function(){
            this.index(1).then(function(){
                require(['./view/comRegulation'],function(View){
                    var view = new View();
                    view.render();
                });
            })
            
        },

        record:function(){
            this.index(1).then(function(){
                require(['./view/record'],function(View){
                    var view = new View();
                    view.render();
                });
            })
            
        },

        safetyInfo:function(){
            this.index(1).then(function(){
                require(['./view/safetyInfo'],function(View){
                    var view = new View();
                    view.render();
                });
            })
            
        },

        loading:function(){
            this.index(1).then(function(){
                require(['./view/loading'],function(View){
                    var view = new View();
                    view.render();
                });
            })
            
        },

        personalLaon:function(){
            this.index(1).then(function(){
                require(['./view/personalLaon'],function(View){
                    var view = new View();
                    view.render();
                });
            })
            
        },

        comLoan:function(){
            this.index(1).then(function(){
                require(['./view/comLoan'],function(View){
                    var view = new View();
                    view.render();
                });
            })
            
        },

        borrow:function(){
            this.index(1).then(function(){
                require(['./view/borrow'],function(View){
                    var view = new View();
                    view.render();
                });
            })
            
        },

        borrProcess:function(){
            this.index(1).then(function(){
                require(['./view/borrProcess'],function(View){
                    var view = new View();
                    view.render();
                });
            })
            
        },



        
	});
});