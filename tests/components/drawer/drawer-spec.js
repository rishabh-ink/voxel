define(function(require) {
  "use strict";

  var jQ = require("jquery");
  var JasminejQuery = require("jasmine-jquery");

  var Drawer = require("components/drawer");

  describe("Drawer", function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = "/base/tests/components";
      loadFixtures("drawer/drawer-fixture.html");

      this.drawerComponent = Drawer.create({
        name: "Voxel.Drawer",
        closeOnPageTouch: false
      });
    });

    it("loadFixtures() should load fixtures", function() {
      var voxelDrawer = jQ("[data-js~='voxelDrawer']");

      expect(voxelDrawer[0]).toBeInDOM();
    });

    it("openDrawer() should open the Drawer", function() {
       var voxelDrawer = jQ("[data-js~='voxelDrawer']");
       var voxelDrawerToggle = jQ("[data-js~='voxelDrawerToggle']");

       this.drawerComponent.openDrawer();

       expect(voxelDrawer[0]).toHaveClass("voxel-drawer--active");
       expect(voxelDrawerToggle[0]).toHaveClass("voxel-drawer__toggle--active");
    });

    it("closeDrawer() should close the Drawer", function() {
       var voxelDrawer = jQ("[data-js~='voxelDrawer']");
       var voxelDrawerToggle = jQ("[data-js~='voxelDrawerToggle']");

       this.drawerComponent.closeDrawer();

       expect(voxelDrawer[0]).not.toHaveClass("voxel-drawer--active");
       expect(voxelDrawerToggle[0]).not.toHaveClass("voxel-drawer__toggle--active");
    });
  });
});
