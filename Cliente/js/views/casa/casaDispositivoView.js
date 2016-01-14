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
       'click #cmdSubirPersiana' : 'showAlert'
    },

    render: function(){
            
      this.$el.html(dispositivoTemplate);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    },

    /* Métodos privados */
    showAlert: function(){
      alert('');
    }

  });

  return DispositivoView;
  
});