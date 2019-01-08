const gulp = require('gulp'),
      sassCompile = require('gulp-sass');

function styles() {
    return gulp.src('./src/style/main.scss')
               .pipe(sassCompile())
               .pipe(gulp.dest('./build/css'));
}

function scripts() {
    
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);