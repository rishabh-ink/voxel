define(function(require) {
  "use strict";

  var jQ = require("jquery");
  var JasminejQuery = require("jasmine-jquery");

  var VoxelFixture = require("./voxel-fixture");
  var Voxel = require("voxel");

  describe("Voxel", function() {
    it("Should greet", function() {
      var voxel = Voxel.create();

      expect(voxel.greet()).toEqual(VoxelFixture.greeting);
    });
  });
});
