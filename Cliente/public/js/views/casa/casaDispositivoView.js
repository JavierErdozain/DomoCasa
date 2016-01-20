define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/casa/casaDispositivoTemplate.html'
  
], function($, _, Backbone, dispositivoTemplate){

  var DispositivoView = Backbone.View.extend({
    el: $("#page-wrapper"),

    events: {
       'click #cmdSubirPersiana' : 'InstruccionOn',
       'click #cmdBajarPersiana' : 'InstruccionOff'
     },

    render: function(){            
      this.$el.html(dispositivoTemplate);
     },

    /* Métodos privados */
    InstruccionOn: function(){
      $.get('/api/12/on', function(data) {
        console.log(data);
      });
     },

    InstruccionOff: function(){
      $.get('/api/12/off', function(data) {
        console.log(data);
      });
     }

  });

  return DispositivoView;
  
});