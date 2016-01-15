define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/casa/casaTemplate.html',
  'collections/dispositivos/tiposDispositivosCollection'
], function($, _, Backbone, SidebarView, homeTemplate, collectionsTipoDispositivos){

  var HomeView = Backbone.View.extend({
    el: $("#page-wrapper"),
    data:{},

    initialize : function() {
      this.data = {
        titulo: 'Mi casa',
        tipoDispositivo: new collectionsTipoDispositivos().toJSON()
      };
    },      
      
    render: function(){
      var tipoCompiledTemplate = _.template( homeTemplate, this.data );
      this.$el.html( tipoCompiledTemplate ); 
    }

  });

  return HomeView;
  
});