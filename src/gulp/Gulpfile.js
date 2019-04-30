let gulp = require('gulp')
let sass = require('gulp-sass')
let cleanCSS = require('gulp-clean-css');
const { watch } = require('gulp');
const { series } = require('gulp');


gulp.task('sass', function(){
  return gulp.src('main.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'))
});


gulp.task('watch', function() {
  gulp.watch('main.scss', gulp.series('sass'));
});
