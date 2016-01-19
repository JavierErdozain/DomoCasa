// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/casa/tipoDispositivosView',
  'views/casa/listadoDispositivoView',
  'views/casa/casaDispositivoView', 
  'views/footer/FooterView',
], function($, _, Backbone, CasaView, miCasaListadoView, detalleDispositivoView, FooterView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'miCasa': 'defaultAction',            
      'listadoDispositivos/:id':'miCasalistadoTipos',
      'detalleDispositivo':'miCasaDispositivo',
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
        
    app_router.on('route:defaultAction', function () { 
      var casaiew = new CasaView();
      casaiew.render();
    });

    app_router.on('route:miCasalistadoTipos', function (id) {            
      alert('0');
      console.log(id);
      var casalistadoTipo = new miCasaListadoView(id);
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
