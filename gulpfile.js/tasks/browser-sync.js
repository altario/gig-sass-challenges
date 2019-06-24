// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');



// vars --------------------

// vars: browser-sync
global.browserSync = require("browser-sync").create();



// tasks --------------------

// tasks: browser-sync
gulp.task('browser-sync', () => {
  console.log(' -> "browser-sync" task running...');

  browserSync.init({
    port: global.var.browserSync.port,
    server: `.${global.var.build.base}`,
    browser: global.var.browserSync.browser
  });
});
