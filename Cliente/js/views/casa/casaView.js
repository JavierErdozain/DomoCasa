define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/casa/casaTemplate.html'
], function($, _, Backbone, SidebarView, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page-wrapper"),

    render: function(){
            
      this.$el.html(homeTemplate);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return HomeView;
  
});