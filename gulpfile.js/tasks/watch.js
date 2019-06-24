// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');



// tasks --------------------

// tasks: watch
gulp.task('watch', global.var.watch.tasks, () => {
  console.log(' -> "watch" task running...');

  // html
  gulp.watch(global.var.html.watch, {cwd: global.var.html.watch}, ['html']);

  // sass
  gulp.watch(global.var.sass.watch, {cwd: global.var.sass.watch}, ['sass']);
});
