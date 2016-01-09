define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var PerifericosModel = Backbone.Model.extend({

		per : function (){
			return {
	        	nombre:'nombre1'			
	        };
	    }
	    	    
    });

  	return PerifericosModel;

});
