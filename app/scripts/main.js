require.config({
  paths: {
    // Libraries
    "jquery": "../../libraries/jquery/jquery.min",
    "es5-shim": "../../libraries/es5-shim/es5-shim.min",
    "es5-sham": "../../libraries/es5-shim/es5-sham.min"
    // /Libraries
  },

  shim: {
  }
});

require(["jquery", "es5-shim", "es5-sham", "voxel"],
function( $,        ES5Shim,    ES5Sham,    Voxel) {
  var voxel = Voxel.create();

  console.log("Voxel, %s, with jQuery v%s says, '%s'", voxel.options.name, $.fn.jquery, voxel.greet());
});
