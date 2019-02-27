var gulp = require('gulp');
var sass = require("gulp-sass");
// var concat = require("gulp-concat");
var browserSync = require("browser-sync");
// var babel = require("gulp-babel");

// 编译sass
gulp.task("sass",function(){
    return gulp.src('./src/scss/*.scss') //最后更该为*.scss
    // 编译
        .pipe(sass({
            outputStyle: 'expanded'           // 配置输出方式,默认为nested
            // outputStyle: 'compressed'           // 配置输出方式,默认为nested
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.reload({stream:true}))
})

//处理html
gulp.task("html",function(){
    return gulp.src('./src/*.html') //最后更该为*.html
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({stream:true}))
})
//处理css
gulp.task("css",function(){
    return gulp.src('./src/css/*.css') //最后更该为*.html
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({stream:true}))
})
//处理js
gulp.task("js",function(){
    return gulp.src('./src/js/**/*.js') //最后更该为*.html
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({stream:true}))
})
//处理图片
gulp.task("img",function(){
    return gulp.src('./src/images/**/*.*') //最后更该为*.html
        .pipe(gulp.dest('./dist/images/'))
        .pipe(browserSync.reload({stream:true}))
})
//合并js
// gulp.task("js",function(){
//     return gulp.src('./src/js/**/*.js')
//         .pipe(babel())
//         // .pipe(concat('all.js'))
//         .pipe(gulp.dest('./dist/js/'))
//         // .pipe(browserSync.reload({stream:true}))
// })

gulp.task('watch',function(){
    browserSync.init({  
        port: 8000,  
        server: {  
            baseDir: ['dist'],
            index:'cart.html' // 指定默认打开的文件  
        }  
    }); 
    gulp.watch("./src/**/*.html",gulp.series('html'));
    gulp.watch("./src/scss/**/*.scss",gulp.series('sass'));
    gulp.watch("./src/js/**/*.js",gulp.series('js'));
})

gulp.task("default",gulp.series('sass', 'html', 'css', 'img', 'js', 'watch'));