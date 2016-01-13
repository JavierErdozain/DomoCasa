// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/casa/casaView',
  'views/casa/listadoTipoView',
  'views/casa/casaDispositivoView', 
  'views/footer/FooterView',
], function($, _, Backbone, CasaView, miCasaListadoView, detalleDispositivoView, FooterView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'miCasa': 'defaultAction',      
      'miCasa_listadoTipo':'miCasalistadoTipos',
      'detalleDispositivo':'miCasaDispositivo',
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:perifericos', function(){  
        
        //var perifericosView = new PerifericosView();
        //perifericosView.render();

    });

    app_router.on('route:defaultAction', function (actions) { 
      var casaiew = new CasaView();
      casaiew.render();
    });
    app_router.on('route:miCasalistadoTipos', function (actions) {            
      
      var casalistadoTipo = new miCasaListadoView();
      casalistadoTipo.render();
    });
    app_router.on('route:miCasaDispositivo', function (actions) {            
      
      var casaDispositivo = new detalleDispositivoView();
      casaDispositivo.render();
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
