let gulp = require('gulp')
let sass = require('gulp-sass')
const { watch } = require('gulp');
const { series } = require('gulp');


gulp.task('sass', function(){
  return gulp.src('scss/general.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('dist'))
});


gulp.task('watch', function() {
  gulp.watch('scss/general.scss', gulp.series('sass'));
});
