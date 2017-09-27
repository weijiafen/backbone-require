// This is the runtime configuration file.  It complements the Gruntfile.js by
// supplementing shared properties.
require.config({
	paths: {

		// Opt for Lo-Dash Underscore compatibility build over Underscore.
		"underscore": "lib/lodash/dist/lodash.underscore",

		// Map remaining vendor dependencies.
		"jquery": "lib/jquery.min", 
		"backbone": "lib/backbone.min",
		"text": "lib/text",
		"art-template":"lib/template-web",
		"css": "lib/css.min",
        "bootbox":"lib/bootbox.min",
        "bootstrap":"lib/bootstrap/dist/js/bootstrap.min",
        "datetimepicker": "lib/datetimepicker/bootstrap-datetimepicker.min",
        "typeahead": "lib/bootstrap-typeahead/bootstrap-typeahead"  
	},
	shim: {
		// This is required to ensure Backbone works as expected within the AMD
		// environment.
		"backbone": {
			// These are the two hard dependencies that will be loaded first.
			deps: ["underscore","art-template"],

			// This maps the global `Backbone` object to `require("backbone")`.
			exports: "Backbone"
        },
        "bootstrap": {
            deps: [ 'jquery' ],
            exports: 'bootstrap'
        },
        "bootbox": {
            deps: [ 'jquery', 'bootstrap'],
            exports: 'bootbox'
        },        
        'datetimepicker': {
            deps: [ 'jquery' ],
            exports: 'datetimepicker'
        },
        'typeahead': {
            deps: [ 'jquery' ],
            exports: 'typeahead'
        }
	}
});