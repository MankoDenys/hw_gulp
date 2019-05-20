'use strict';

const gulp = require('gulp');
    // connect = require('gulp-connect');
    sass = require('gulp-sass');
    sourcemaps = require('gulp-sourcemaps');


// gulp.task('hello', function(callback) {
//     console.log('Hello');
//     callback();
// });

gulp.task('sass', function () {
    return gulp.src('./app/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/css'));
});

// gulp.task('connect', function() {
//     connect.server({
//         root: [outputDir],
//         port: 8080,
//         keepalive: true,
// 	open: { browser: 'chrome' }
//     });

// });

// gulp.task('connect', function() {
//     connect.server({
//         root: 'SASS',
//         livereload: true,
//         open: true
//       });
// });

// gulp.task('html', function() {
//     gulp.src('./app/*.html')
//     .pipe(gulp.dest('./app'))
//     .pipe(connect.reload());
// });

// gulp.task('default', ['hello','connect']);
