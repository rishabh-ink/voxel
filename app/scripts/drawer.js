define(["jquery"],
function($) {
  "use strict";

  var Drawer = {
    defaults: {
      elements: {
        drawerToggle: "[data-js='voxelDrawerToggle']",
        drawer: "[data-js='voxelDrawer']"
      },

      classnames: {
        drawerActive: "voxel-drawer--active",
        drawerToggleActive: "voxel-drawer__toggle--active"
      }
    },

    init: function(options) {
      this.options = $.extend(true, {}, this.defaults, options);

      this.fetch();
      this.attach();

      return this;
    },

    fetch: function() {
      this.elements = {
        drawerToggle: $(this.options.elements.drawerToggle),
        drawer: $(this.options.elements.drawer)
      };

      return this;
    },

    toggleDrawer: function() {
      this.elements.drawer.toggleClass(this.options.classnames.drawerActive);
      this.elements.drawerToggle.toggleClass(this.options.classnames.drawerToggleActive);

      return this;
    },

    attach: function() {
      this.elements.drawerToggle.on({
        "click.voxel": $.proxy(this.toggleDrawer, this)
      });

      return this;
    }
  };

  return Drawer;
});
