const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');

const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const fileinclude = require('gulp-file-include');

// COMPILE SCSS INTO CSS
function style() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 15 versions'],
      grid: true,
    }))
    .pipe(cleancss({
      level: {
        1: {
          specialComments: 0,
        },
      },
      format: 'beautify',
    }))
    .pipe(gulp.dest('./src'))
    .pipe(browserSync.stream());
}

// LIVE UPDATE
function watch() {
  browserSync.init({
    server: {
      baseDir: './src',
    },
    port: 8081,
    notify: false,
  });
  gulp.watch('./src/scss/**/*.scss', style);
  gulp.watch('./src/**/*.html').on('change', browserSync.reload);
  gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
  gulp.watch('src/images/**/*', images);
}

function images() {
	return gulp.src('./src/images/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('./dist/images/'));
}

function cleandist() {
	return del('./dist/**/*', { force: true });
}

function buildCopy() {
	return gulp.src([
		'./src/*.css',
		'./src/js/**/*.js',
		'./src/images/**/*',
		'./src/**/*.html',
		], { base: 'src' })
	.pipe(gulp.dest('./dist/'));
}

async function includeHTML() {
  gulp.src([
    './src/**/*.html',
    '!./src/components/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./src/'));
}

exports.style = style;
exports.images = images;
exports.includeHTML = includeHTML;
// exports.watch = gulp.series(includeHTML, watch);
exports.watch = async () => {
  await includeHTML();
  watch();
};
exports.build = gulp.series(cleandist, style, images, buildCopy);
