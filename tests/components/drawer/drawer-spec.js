define(function(require) {
  "use strict";

  var jQ = require("jquery");
  var JasminejQuery = require("jasmine-jquery");

  var Drawer = require("components/drawer");

  describe("Drawer", function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = "/base/tests/components";
      loadFixtures("drawer/drawer-fixture.html");

      var drawer = Drawer.create({
        name: "Voxel.Drawer",
        closeOnPageTouch: false
      });
    });

    it("loadFixtures() should load fixtures", function() {
      var voxelDrawer = jQ("[data-js~='voxelDrawer']");

      expect(voxelDrawer.length).toEqual(1);
    });

    it("Should spec 2", function() {
    });

  });
});
