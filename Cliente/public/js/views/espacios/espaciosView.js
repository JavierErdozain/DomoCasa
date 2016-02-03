define([
  'jquery',
  'underscore',
  'backbone',
  'collections/espacios/espaciosCollection',
  'text!templates/espacios/espaciosTemplate.html'  
], function($, _, Backbone, EspaciosCollection, EspaciosTemp){

  var DispositivoView = Backbone.View.extend({
    el: $("#page-wrapper"),

    initialize:function() {

      var that = this;

      var onDataHandler = function(collection) {
          that.render();
      }

      that.collection = new EspaciosCollection([]); 
      that.collection.fetch({ success : onDataHandler, dataType: "jsonp" });

    },

    render: function(){            
      this.$el.html(EspaciosTemp);
     }

  });

  return DispositivoView;
  
});