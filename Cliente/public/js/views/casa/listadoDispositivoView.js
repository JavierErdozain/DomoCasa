define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/casa/listadoTipoTemplate.html',
  'collections/dispositivos/dispositivosCollection'
], function($, _, Backbone, listadoTemplate, collectionsDispositivos){

  var ListadoView = Backbone.View.extend({
    el: $("#page-wrapper"),
    data: {},

    initialize:function(id) {
      var collect = new collectionsTipoDispositivos().toJSON();      
      this.data = {
        tipoDispositivo: collect
      };
    },

    render: function(){            
      this.$el.html(listadoTemplate); 
    }

  });

  return ListadoView;
  
});