import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import nunjucksRender from 'gulp-nunjucks-render';
import sassCompiler from 'sass'; 
import path from 'path';
import { fileURLToPath } from 'url'; 

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sassWithCompiler = sass(sassCompiler);

// Define paths
const paths = {
  scss: 'src/scss/**/*.scss', // SCSS files
  css: 'dist/css',             // Output CSS
  html: 'src/**/*.njk',       // Nunjucks template files
  distHtml: 'dist',            // Output HTML folder
};

gulp.task('styles', () => {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassWithCompiler().on('error', sassWithCompiler.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});


gulp.task('nunjucks', () => {
  return gulp.src(paths.html) 
    .pipe(nunjucksRender({
      path: [path.join(__dirname, 'src/pages')] 
    }))
    .pipe(gulp.dest(paths.distHtml)); 
});

// Watch SCSS, Nunjucks, and HTML files
gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: './dist/pages',  
    },
  });

  gulp.watch(paths.scss, gulp.series('styles'));  // Watch SCSS files for changes
  gulp.watch(paths.html, gulp.series('nunjucks')).on('change', browserSync.reload);  // Watch Nunjucks files for changes
});

// Default Gulp task to run everything
gulp.task('default', gulp.series('styles', 'nunjucks', 'watch'));