var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  baseUrl: "/base",

  paths: {
    // Libraries
    "jquery": "libraries/jquery/jquery",
    "es5-shim": "libraries/es5-shim/es5-shim.min",
    "es5-sham": "libraries/es5-shim/es5-sham.min",
    // /Libraries

    // Application
    "voxel": "src/scripts/voxel",
    "components/drawer": "src/scripts/components/drawer",
    // /Application
  },

  shim: {
  },

  deps: allTestFiles,

  callback: window.__karma__.start
});
