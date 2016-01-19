define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/casa/casaTemplate.html',
  'collections/dispositivos/tiposDispositivosCollection',
  ''
], function($, _, Backbone, SidebarView, homeTemplate, collectionsTipoDispositivos){

  var HomeView = Backbone.View.extend({
    el: $("#page-wrapper"),
    data:{},

    events: {
       'click #cmdSubirPersiana' : 'InstruccionOn',
       'click #cmdBajarPersiana' : 'InstruccionOff'
    },

    initialize : function() {
      this.data = {
        titulo: 'Mi casa',
        tipoDispositivo: new collectionsTipoDispositivos().toJSON()
      };
    },      
      
    render: function(){
      var tipoCompiledTemplate = _.template( homeTemplate, this.data );
      this.$el.html( tipoCompiledTemplate ); 
    },

    InstruccionOn: function(){
      $.get('/luces/17/on', function(data) {
        console.log(data);
      });
     },
     InstruccionOff: function(){
      $.get('/lices/17/off', function(data) {
        console.log(data);
      });
     },

  });

  return HomeView;
  
});