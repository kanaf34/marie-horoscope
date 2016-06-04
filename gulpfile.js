var gulp   = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task('watch', function() {
  gulp.watch('./app/main.js', ['browserify']);
})

gulp.task('browserify', function() {
  return browserify('./app/main.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app'));
})

// var uglify = require('gulp-uglify');
// gulp.task('uglify', function() {
//   return gulp.src('./app/bundle.js')  
//     .pipe(uglify({mangle:false}))
//     .pipe(gulp.dest('./app/dest'));
// })

gulp.task('default', ['watch']);