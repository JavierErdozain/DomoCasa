define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var TipoDispositivoModel = Backbone.Model.extend({
  	
  	defaults : {
  		Codigo:0,
  		Nombre:'',
  		Imagen: ''   		
  	}

  });

  return TipoDispositivoModel;

});