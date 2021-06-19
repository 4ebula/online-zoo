const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const importResolve = require('import-resolve');

const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const fileinclude = require('gulp-file-include');

// COMPILE SCSS INTO CSS
function style() {
  return gulp.src('./src/scss/style.scss')
    /* .pipe(concat('style.scss'))*/
    .pipe(sass())
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
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
}

// LIVE UPDATE
function watch() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
    port: 8081,
    notify: false,
  });
  gulp.watch('./src/**/*.scss', style);
  gulp.watch('./src/**/*.html').on('change', async () => {
    await includeHTML();
    browserSync.reload();
  });
  gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
  gulp.watch('src/images/**/*', images);
}

function images() {
  return gulp.src('./src/images/**/*')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('./dist/images/'));
}

function sassImport() {
  return importResolve({
    "ext": "scss",
    "pathToMain": "./src/scss/main.scss",
    "output": "./src/scss/style.scss"
  });
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
  return gulp.src([
    './src/**/*.html',
    '!./src/components/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'));
}

exports.style = style;
exports.images = images;
exports.includeHTML = includeHTML;

exports.watch = async () => {
  cleandist();
  await includeHTML();
  sassImport();
  style();
  images();
  watch();
};

exports.build = async () => {
  cleandist();
  await includeHTML();
  sassImport();
  style();
  images();
};
