// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');

// dependencies: sass
const sass = require('gulp-sass');

// dependencies: utils
const plumber = require('gulp-plumber'),
      notify = require('gulp-notify'),
      gulpif = require('gulp-if');



// tasks --------------------

// tasks: sass
gulp.task('sass', () => {
  console.log(' -> "sass" task running...');

  return gulp
    .src(`${global.var.sass.src}`)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass(global.var.sass.options).on('error', sass.logError))
    .pipe(gulp.dest(`${global.var.sass.dest}`))
    .pipe(notify({
      title: 'Success',
      message: `Sass generated successfully`,
      type: 'info'
    }))
    .pipe(gulpif(browserSync.active, browserSync.stream()));
});
