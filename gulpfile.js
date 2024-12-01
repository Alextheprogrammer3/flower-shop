const gulp = require('gulp');
const pug = require('gulp-pug');
const fs = require('fs');
const { src, dest } = require('gulp'); // Correctly destructure gulp methods
const concat = require('gulp-concat');

// Read the SVG file from your local file system (ensure correct path)
const svgPath = 'C:/Users/Diora/OneDrive/Desktop/icons/shopping-cart-svgrepo-com.svg';

// Check if the file exists before reading it to avoid errors
if (fs.existsSync(svgPath)) {
  const svgContent = fs.readFileSync(svgPath, 'utf8');

  // JavaScript concatenation task
  function js() {
    return src('src/static/js/*.js') // Updated path to src/static/js
      .pipe(concat('bouquet.js')) // Concatenate into bouquet.js
      .pipe(dest('dist/js')); // Output folder for the concatenated JavaScript
  }

  // Task to process Pug files
  gulp.task('pug', function() {
    return gulp.src('src/views/**/*.pug') // Path to your Pug templates
      .pipe(
        pug({
          pretty: true, // Optional: for prettier output HTML
          compileDebug: true,
          locals: {
            svg: svgContent, // Inject the SVG content into locals
          },
          basedir: 'src', // Set the base directory for the templates
        })
      )
      .pipe(gulp.dest('dist')); // Output folder for compiled HTML
  });

  // Define the default task (this is necessary for `gulp` to run it)
  gulp.task('default', gulp.series('pug', js)); // Run 'pug' and 'js' tasks sequentially

  // Watch task (you can define this task to automatically re-run tasks on file changes)
  gulp.task('watch', function() {
    gulp.watch('src/views/**/*.pug', gulp.series('pug')); // Watch Pug files
    gulp.watch('src/static/js/*.js', gulp.series(js)); // Watch JS files in src/static/js
  });

} else {
  console.error('SVG file does not exist at the specified path:', svgPath);
}
