var gulp = require('gulp'),
concat = require('gulp-concat'),
minify = require('gulp-clean-css'),
uglify = require('gulp-uglify'),
autoprefixer = require('gulp-autoprefixer'),
merge = require('merge-stream');
header = require('gulp-header');
livereload = require('gulp-livereload');
refresh = require('gulp-refresh');

var banner = ['/**',
    ' * Little Scientists Website Static Assets',
    ' * (c) 2017 Abhi Nayar for SemiErect Design Co.',
    ' * Last Updated: <%= new Date().toUTCString() %>',
    ' * Please contact hello[at]abhi.design with questions',
    ' */',
    ''].join('\n');

/* Set up gulp tasks */
gulp.task('build', function(){
  var cssStream = gulp.src(['public/css/main.css'])
    .pipe(concat('app.min.css'))
    .pipe(minify())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(header(banner))
    .pipe(gulp.dest('public/css/prod'))
    .pipe(livereload(({ start: true })));

  var jsStream = gulp.src(['!public/js/vendor/*', 'public/js/main.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(header(banner))
    .pipe(gulp.dest('public/js/prod'));
});

gulp.task('watch', function() {
  livereload({ start: true })
  livereload.listen();
  gulp.watch('public/css/main.css', ['build']);
  gulp.watch('public/js/main.js', ['build']);
});
