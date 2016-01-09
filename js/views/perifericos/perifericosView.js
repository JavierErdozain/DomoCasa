define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'models/perifericos/perifericosModel',
  'text!templates/perifericos/perifericosListaTemplate.html'
], function($, _, Backbone, SidebarView, PeriferiModel, PerifericosListaTemplate){

  var PerifericosListaView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      var compiledTemplate = _.template( PerifericosListaTemplate, PeriferiModel.per);
      this.$el.html(compiledTemplate);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return PerifericosListaView;
  
});
