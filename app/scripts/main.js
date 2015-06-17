require.config({
  paths: {
    // Libraries
    "jquery": "../../libraries/jquery/jquery",
    // /Libraries
  },

  shim: {
  }
});

require(["jquery", "voxel"],
function( $,        Voxel) {
  var voxel = Voxel.create();

  console.log("Voxel, %s, with jQuery v%s says, '%s'", voxel.options.name, $.fn.jquery, voxel.greet());
});
