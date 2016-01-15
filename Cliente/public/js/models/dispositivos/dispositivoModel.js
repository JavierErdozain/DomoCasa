define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var DispositivoModel = Backbone.Model.extend({
  	
  	defaults : {
  		Agrupado : '',
  		Descripcion : '',
  		Tipo : ''  		   		
  	}

  });

  return DispositivoModel;

});
