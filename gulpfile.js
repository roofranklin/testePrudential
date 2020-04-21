var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

    //task para o sass
	gulp.task('sass', function () {
   	 return gulp.src('sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('css'));
    });
    
    // Static server
    gulp.task('browser-sync', function() {
        browserSync.init({
            server: {
                baseDir: "./"
            }
        });
    });

	gulp.task('default', function(){
		
	});