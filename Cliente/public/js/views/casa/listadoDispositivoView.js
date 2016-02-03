define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/casa/listadoTipoTemplate.html',
  'collections/dispositivos/dispositivosCollection'
], function($, _, Backbone, listadoTemplate, collectionsDispositivos){

  var ListadoView = Backbone.View.extend({
    el: $("#page-wrapper"),
<<<<<<< HEAD
    data:{},
=======
    data: {},
>>>>>>> 3aa1473f869a07f9642461f154f8ac2b96924e80

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