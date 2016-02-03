define([
  'underscore',
  'backbone',
  'models/espacios/espaciosModel'
], function(_, Backbone, EspaciosModel){

  var EspaciosCollection = Backbone.Collection.extend({
      
      model: EspaciosModel,
      initialize : function(models, options) {},      
      url : function() {
        return '/espacios';
      },    
      parse : function(data) {
          //var uniqueArray = this.removeDuplicates(data.data);
          return data.data;
      }      
  });

  return EspaciosCollection;

});