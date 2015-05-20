define(["jquery", "hljs", "components/drawer"],
function($,        HLJS,   Drawer) {
  "use strict";

  var App = {
    defaults: {
      name: "App",

      elements: {
        highlight: "[data-js~='highlight']"
      },

      classnames: {},

      useHighlight: false
    },

    elements: {},

    constants: {},

    components: {},

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

      this.elements.highlight = $(this.options.elements.highlight);

      console.log(this.options.name, "fetch()", "Fetched", {
        elements: this.elements
      });

      return this;
    },

    attach: function() {
      console.log(this.options.name, "attach()", "Attaching events");

      return this;
    },

    setup: function() {
      console.log(this.options.name, "setup()", "Setting up components");

      this.components.drawer = Drawer.create({
        name: "Voxel.Drawer",
        closeOnPageTouch: false
      });

      if(this.options.useHighlight) {
        HLJS.initHighlightingOnLoad();
      }

      console.log(this.options.name, "setup()", "Set up components", { components: this.components });

      return this;
    },

    destroy: function() {
      // TODO Destroy component gracefully.
    },

    greet: function() {
      return "Hello world!";
    }
  };

  return Object.create(App);
});
