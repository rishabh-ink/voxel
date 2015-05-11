define(["jquery"],
function($) {
  "use strict";

  var Drawer = {
    defaults: {
      name: "Drawer",

      elements: {
        drawerToggle: "[data-js*='voxelDrawerToggle']",
        drawer: "[data-js*='voxelDrawer']",
        page: "[data-js*='voxelDrawerPage']"
      },

      classnames: {
        drawerActive: "voxel-drawer--active",
        drawerToggleActive: "voxel-drawer__toggle--active"
      }
    },

    create: function(options) {
      this.options = $.extend(true, {}, this.defaults, options);

      this.init();

      return this;
    },

    init: function(options) {

      this.fetch();
      this.attach();
      this.setup();

      return this;
    },

    fetch: function() {
      console.log(this.options.name, "fetch()", "Fetching elements");

      this.elements = {
        drawerToggle: $(this.options.elements.drawerToggle),
        drawer: $(this.options.elements.drawer),
        page: $(this.options.elements.page)
      };

      console.log(this.options.name, "fetch()", "Fetched", {
        elements: this.elements
      });

      return this;
    },

    attach: function() {
      console.log(this.options.name, "attach()", "Attaching events");

      this.elements.drawerToggle.on({
        "click.voxel": $.proxy(this.toggleDrawer, this)
      });

      return this;
    },

    setup: function() {
      console.log(this.options.name, "setup()", "Setting up components");

      this.components = {};

      console.log(this.options.name, "setup()", "Set up components", { components: this.components });

      return this;
    },

    destroy: function() {
      // TODO Destroy component gracefully.
    },

    toggleDrawer: function() {
      this.toggleDrawerClasses();

      console.log(this.options.name, "toggleDrawer()", "Attaching event with jQuery.one");
      this.elements.page.one({
        "click.voxel": $.proxy(this.toggleDrawerClasses, this)
      });

      return this;
    },

    toggleDrawerClasses: function() {
      console.log(this.options.name, "toggleDrawerClasses()", "Toggling classes");

      this.elements.drawer.toggleClass(this.options.classnames.drawerActive);
      this.elements.drawerToggle.toggleClass(this.options.classnames.drawerToggleActive);

      console.log(this.options.name, "toggleDrawerClasses()", "Toggled classes", {
        drawer: this.elements.drawer.attr("class"),
        drawerToggle: this.elements.drawerToggle.attr("class")
      });
    }
  };

  return Object.create(Drawer);
});
