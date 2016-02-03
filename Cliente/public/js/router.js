// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/espacios/espaciosView'  
], function($, _, Backbone,                         
            EspaciosView
            ) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      
      ''                     : 'espacios',  
      'miCasa'               : 'defaultAction',            
      'listadoDispositivos'  : 'miCasalistadoTipos',
      'detalleDispositivo'   : 'miCasaDispositivo',

    }

  });
  
  var initialize = function(){

    var app_router = new AppRouter;
       
    app_router.on('route:espacios', function () { 
      var espacioview = new EspaciosView();
      espacioview.render();
    });
/*
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
      alert('1');
      var casaDispositivo = new detalleDispositivoView();
      casaDispositivo.render();
    });
*/
    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
  //  var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
