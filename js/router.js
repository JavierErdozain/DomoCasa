// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/casa/casaView',
  'views/perifericos/perifericosView',  
  'views/footer/FooterView'
], function($, _, Backbone, CasaView, PerifericosView, FooterView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'perifericos': 'perifericos',      
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:perifericos', function(){  
        
        var perifericosView = new PerifericosView();
        perifericosView.render();

    });

    app_router.on('route:defaultAction', function (actions) {            
      var casaiew = new CasaView();
      casaiew.render();
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
