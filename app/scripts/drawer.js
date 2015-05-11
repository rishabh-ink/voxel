define(["jquery"],
function($) {
  "use strict";

  var Drawer = {
    defaults: {
      name: "Drawer",

      elements: {
        drawerToggle: "[data-js~='voxelDrawerToggle']",
        drawer: "[data-js~='voxelDrawer']",
        page: "[data-js~='voxelDrawerPage']"
      },

      classnames: {
        drawerActive: "voxel-drawer--active",
        drawerToggleActive: "voxel-drawer__toggle--active"
      },

      closeOnPageTouch: true
    },

    elements: {},

    components: {},

    constants: {
      states: {
        OPEN: 1,
        CLOSE: -1,
        TOGGLE: 0
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

      this.elements.drawerToggle = $(this.options.elements.drawerToggle);
      this.elements.drawer = $(this.options.elements.drawer);
      this.elements.page = $(this.options.elements.page);

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

      // this.components.exampleComponent = ExampleComponent.create();

      console.log(this.options.name, "setup()", "Set up components", { components: this.components });

      return this;
    },

    destroy: function() {
      // TODO Destroy component gracefully.
    },

    toggleDrawer: function() {
      console.log(this.options.name, "toggleDrawer()", "Toggling drawer");

      this.setDrawerState(this.constants.states.TOGGLE);

      if(this.options.closeOnPageTouch) {
        console.log(this.options.name, "toggleDrawer()", "Attaching event with jQuery.one");
        this.elements.page.off("click.voxel").one({
          "click.voxel": $.proxy(this.closeDrawer, this)
        });
      }

      return this;
    },

    closeDrawer: function() {
      console.log(this.options.name, "closeDrawer()", "Closing drawer");

      this.setDrawerState(this.constants.states.CLOSE);
    },

    openDrawer: function() {
      console.log(this.options.name, "openDrawer()", "Closing drawer");

      this.setDrawerState(this.constants.states.OPEN);
    },

    setDrawerState: function(state) {
      var drawer = this.elements.drawer;
      var drawerToggle = this.elements.drawerToggle;

      switch(state) {
        case this.constants.states.TOGGLE: {
          drawer.toggleClass(this.options.classnames.drawerActive);
          drawerToggle.toggleClass(this.options.classnames.drawerToggleActive);

          break;
        }

        case this.constants.states.CLOSE: {
          drawer.removeClass(this.options.classnames.drawerActive);
          drawerToggle.removeClass(this.options.classnames.drawerToggleActive);

          break;
        }

        case this.constants.states.OPEN: {
          drawer.addClass(this.options.classnames.drawerActive);
          drawerToggle.addClass(this.options.classnames.drawerToggleActive);

          break;
        }
      }

      console.log(this.options.name, "setDrawerState()", "Set drawer state", state, {
        drawer: this.elements.drawer.attr("class"),
        drawerToggle: this.elements.drawerToggle.attr("class")
      });
    }
  };

  return Object.create(Drawer);
});
