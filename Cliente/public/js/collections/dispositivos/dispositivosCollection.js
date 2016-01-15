define([
  'jquery',
  'underscore',
  'backbone',
  'models/dispositivos/dispositivoModel'
], function($, _, Backbone, DispositivoModel){
  var DispositivosCollection = Backbone.Collection.extend({

    model: DispositivoModel,
    
    initialize: function(){

      this.add(
      {
        Agrupado : 'Persiana',
        Descripcion : 'Persiana de salon 1',
        Tipo : 'Interruptor'
      },
      {
        Agrupado : 'Persiana',
        Descripcion : 'Persiana de salon 2',
        Tipo : 'Interruptor'
      });

    }

  });
 
  return DispositivosCollection;
});
