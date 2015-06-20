define(["jquery"],
function($) {
  "use strict";

  var Drawer = {
    defaults: {
      name: "Drawer",

      elements: {
        drawerToggle: "[data-js~='voxelDrawerToggle']",
        drawer: "[data-js~='voxelDrawer']",
        page: "[data-js~='voxelDrawerPage']",
        headerTitle: "[data-js~='voxelDrawerHeaderTitle']"
      },

      classnames: {
        drawerActive: "voxel-drawer--active",
        drawerToggleActive: "voxel-drawer__toggle--active",
        pageInactive: "voxel-layouts__page--inactive",
        headerTitleInactive: "voxel-header__title--inactive"
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
      this.elements.headerTitle = $(this.options.elements.headerTitle);

      console.log(this.options.name, "fetch()", "Fetched", {
        elements: this.elements
      });

      return this;
    },

    attach: function() {
      console.log(this.options.name, "attach()", "Attaching events");

      var events = {};

      events["click." + this.options.name] = $.proxy(this.toggleDrawer, this);

      this.elements.drawerToggle.on(events);

      return this;
    },

    setup: function() {
      console.log(this.options.name, "setup()", "Setting up components");

      // this.components.exampleComponent = ExampleComponent.create();

      console.log(this.options.name, "setup()", "Set up components", { components: this.components });

      return this;
    },

    destroy: function() {
      this.elements.drawerToggle.off("." + this.options.name);

      return this;
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
      var page = this.elements.page;
      var headerTitle = this.elements.headerTitle;

      switch(state) {
        case this.constants.states.TOGGLE: {
          drawer.toggleClass(this.options.classnames.drawerActive);
          drawerToggle.toggleClass(this.options.classnames.drawerToggleActive);
          page.toggleClass(this.options.classnames.pageInactive);
          headerTitle.toggleClass(this.options.classnames.headerTitleInactive);

          break;
        }

        case this.constants.states.CLOSE: {
          drawer.removeClass(this.options.classnames.drawerActive);
          drawerToggle.removeClass(this.options.classnames.drawerToggleActive);
          page.removeClass(this.options.classnames.pageInactive);
          headerTitle.removeClass(this.options.classnames.headerTitleInactive);

          break;
        }

        case this.constants.states.OPEN: {
          drawer.addClass(this.options.classnames.drawerActive);
          drawerToggle.addClass(this.options.classnames.drawerToggleActive);
          page.addClass(this.options.classnames.pageInactive);
          headerTitle.addClass(this.options.classnames.headerTitleInactive);

          break;
        }
      }

      console.log(this.options.name, "setDrawerState()", "Set drawer state", state, {
        drawer: this.elements.drawer.attr("class"),
        drawerToggle: this.elements.drawerToggle.attr("class"),
        page: this.elements.page.attr("class"),
        headerTitle: this.elements.headerTitle.attr("class")
      });
    }
  };

  return Object.create(Drawer);
});
