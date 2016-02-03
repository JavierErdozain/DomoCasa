define([
  'underscore',
  'backbone',
], function(_, Backbone) {
	
   	var ObjEspacio = Backbone.Model.extend({
		defaults: {
	    nombre:'',
	    imagen:'glyphicon glyphicon-lamp',
	    colorFondo:'yellow',
	    dispositivos:[]
	  }	  
	});
	return ObjEspacio;
});


