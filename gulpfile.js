'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

// Compile scss to css
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// Compile scss to css and watch
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});