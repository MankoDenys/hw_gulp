'use strict';

var config = {
    appDir: './app',
    sassPattern: 'scss/**/*.scss'
};

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    csso = require('gulp-csso'),
    connect = require('gulp-connect');

// gulp.task('hello', function(callback) {
//     console.log('Hello');
//     callback();
// });

gulp.task('sass', function () {
    return gulp.src([config.appDir+'/scss/main.scss', config.appDir+'/scss/style.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('connect', function() {
    connect.server({
      port: 8080
    });
    connect.serverClose();
  });
  
// gulp.task('connect', function() {
//     connect.server();
//   });

// gulp.task('disconnect', function() {
//     server.closeServer();
// });

gulp.task('watch', function () {
    gulp.watch(config.appDir+'/'+config.sassPattern, gulp.parallel('sass', 'connect'))
});

gulp.task('default', gulp.parallel('sass', 'connect', 'watch'));

