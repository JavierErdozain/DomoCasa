define([
  'jquery',
  'underscore',
  'backbone',
  'models/dispositivos/tipoDispositivoModel'
], function($, _, Backbone, TipoDispositivoModel){
  var TipoDispositivosCollection = Backbone.Collection.extend({

    model: TipoDispositivoModel,
    
    initialize: function(){

      this.add([	      
	      {
	      	Codigo: 2,
	        Nombre : 'Luces' ,       
	        Imagen:'glyphicon glyphicon-lamp',
	        colorFondo : 'yellow',
	        dispositivos: []
	      },
	      {
	      	Codigo: 1,
	        Nombre : 'Persiana', 
	        Imagen : 'glyphicon glyphicon-align-justify',
	        colorFondo : 'red',
	        dispositivos: [
	        	{
	        		Nombre: 'Persiana salón 1',
	        		pinSubida:1,
	        		pinBajada:2
		        },
		        {
		        	Nombre: 'Persiana salón 2',
		        	pinSubida:1,
		        	pinBajada:2
		        }
		    ]
	      }
	  ]);

    }

  });
 
  return TipoDispositivosCollection;
});
