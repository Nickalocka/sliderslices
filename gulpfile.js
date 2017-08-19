var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('autoprefixer', function () {
    gulp.src('./public/assets/css/styles.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/assets/css'))
});

var files = [
    'scripts/vendor/jquery.js',
    'scripts/_app.js',
    'scripts/**/_*.js'
];

gulp.task('scripts', function () {
    return gulp.src(files)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('./public/assets/css/styles.css', ['autoprefixer']);
    gulp.watch('scripts/**/_*.js', ['scripts']);
});

gulp.task('default', ['watch']);