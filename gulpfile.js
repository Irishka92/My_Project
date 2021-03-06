const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('hello', function (callback) {
  console.log('Hello!');
  callback();
});
// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("app/*.html").on('change', browserSync.reload);
});