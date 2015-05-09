var gulp   = require("gulp");
var CFG    = require("./utils/config.js");
var $      = require("gulp-load-plugins")();
var path   = require("path");
var pkg    = require(path.join("..", CFG.FILE.config.pkg));
var argv   = require("yargs").argv;
var notify = require("./utils/notify-style-compile");

/**
 * style:compile
 * @see www.npmjs.org/package/gulp-compass
 * @see compass-style.org
 * @see compass-style.org/help/tutorials/configuration-reference
 */
gulp.task("style:compile", ["style:lint"], function() {
  return gulp.src([
      path.join(CFG.DIR.src, "**", "*." + CFG.FILE.extension.style.scss)
    ])
    .pipe($.compass({
      bundle_exec: true, // Use the bundle'd gem instead of the global system gem to ensure that we use the version defined in our `Gemfile`.
      config_file: CFG.FILE.config.compass,
      css: path.join(CFG.DIR.dist, CFG.DIR.style),
      sass: path.join(CFG.DIR.src, CFG.DIR.style)
    }))
    .on("error", function(error) {
      if("undefined" !== typeof(process.env.UI_ELEMENTS_CI)) {
        // Running inside a CI environment, break the build
        throw new Error(error);
      } else {
        // Running inside a non-CI environment, show notifications
        notify(error);
      }
    });
});
