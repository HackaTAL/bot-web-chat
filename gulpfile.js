'use strict';

var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('liveReload', ['watch'], function() {
  return gulp.src('.')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('default', ['liveReload']);
