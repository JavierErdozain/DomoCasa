define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/casa/casaDispositivoTemplate.html'
  
], function($, _, Backbone, SidebarView, dispositivoTemplate){

  var DispositivoView = Backbone.View.extend({
    el: $("#page-wrapper"),

    events: {
       'click #cmdSubirPersiana' : 'InstruccionOn',
       'click #cmdBajarPersiana' : 'InstruccionOff'
     },

    render: function(){
            
      this.$el.html(dispositivoTemplate);

      //var sidebarView = new SidebarView();
      //sidebarView.render();
     },

    /* Métodos privados */
    InstruccionOn: function(){
      $.get('/api/red/on', function(data) {
        console.log(data);
      });
     },

    InstruccionOff: function(){
      $.get('/api/red/off', function(data) {
        console.log(data);
      });
     }

  });

  return DispositivoView;
  
});