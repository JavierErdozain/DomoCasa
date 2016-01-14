define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/casa/listadoTipoTemplate.html'
], function($, _, Backbone, listadoTemplate){

  var ListadoView = Backbone.View.extend({
    el: $("#page-wrapper"),

    render: function(){
            
      this.$el.html(listadoTemplate);
 
    }

  });

  return ListadoView;
  
});