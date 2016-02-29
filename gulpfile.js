var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;

gulp.task('default', function() {
  // place code for your default task here
});

gulp.src(["*spec.js"])
    .pipe(protractor({
        configFile: "conf.js",
        args: ['--baseUrl', 'http://127.0.0.1:8000']
    }))
    .on('error', function(e) { throw e; });

var webdriver_standalone = require("gulp-protractor").webdriver_standalone;
gulp.task('webdriver_standalone', webdriver_standalone);
