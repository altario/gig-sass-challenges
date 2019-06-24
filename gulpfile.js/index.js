// dependencies --------------------

// dependencies: gulp
var gulp = require('gulp');

// dependencies: other
var path = require('path');


// requires --------------------

// requires: files
require('./vars');
require('./tasks/browser-sync');
require('./tasks/sass');
require('./tasks/html');
require('./tasks/watch');



// tasks --------------------

// tasks: default
gulp.task('default', () => {
  gulp.start('watch');
});



// info --------------------

// info: terminal run tasks
// [1] gulp
