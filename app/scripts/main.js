(function(window, document, undefined) {
  "use strict";

  require.config({
    baseUrl: "..",

    paths: {
      // Libraries
      "jquery": "libraries/jquery/jquery",
      // /Libraries

      // Application
      "app": "app/scripts/app",
      "drawer": "app/scripts/drawer",
      // /Application
    },

    shim: {
    }
  });

  require(["jquery", "app"],
  function( $,        App) {
    var app = App.create({
      name: "voxel"
    });

    console.log("App, %s, with jQuery v%s says, '%s'", app.options.name, $.fn.jquery, app.greet());
  });
})(window, document);
