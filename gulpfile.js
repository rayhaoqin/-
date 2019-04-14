// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var watch = require('gulp-watch');

// gulp.task('csssass',function(){
//     gulp.src('./src/sass/*.scss')
//     .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
//     .pipe(gulp.dest('./src/css'))
// })


// gulp.task('jt',function(){
//     watch('./src/sass/*.scss',gulp.series("csssass"))
// })



// 局部安装gulp，是为了这里能够引入
// 全局安装gulp，目的是执行任意位置都能gulp任务
// ================================
// 三、gulp任务的书写步骤：
// 1.(1)引入gulp包，返回的是一个对象
//   (2)引入其他包,一般都是返回方法
//          * htmlmin 压缩html
// 2.开启gulp任务 gulp.task()
// 3.书写gulp任务的具体流程
//      从哪里来 --- 管道运输（经历什么改变） ----- 管道运输（到哪里去）
//      gulp.src()    gulp.pipe(经历什么)   ----   gulp.pipe(gulp.dest(目录))
// npmjs.com
// 
// 主任务：
const gulp = require("gulp");
// const htmlmin = require("gulp-htmlmin");
// const cleanCss = require("gulp-clean-css");
// const rename = require("gulp-rename");
// const jsUglify = require("gulp-uglify");
// const concat = require("gulp-concat");
// const babel = require("gulp-babel");
// const sass = require("gulp-sass");
// const watch = require("gulp-watch");

//扩展：pump() 泵
// const pump = require("pump");

// 任务1： html文件的传递
// gulp.task("copyhtml",function(){
//     gulp.src("./src/index.html")
//     .pipe(gulp.dest("./dist/index.html"))
// })

// // 任务2： js多个文件的传递
// gulp.task("copyAllJs",function(){
//     // gulp.src(["./src/js/a.js","./src/js/b.js"]) //
//     // gulp.src("./src/js/*.js")
//     gulp.src(["./src/js/**/*.js","!./src/js/a.js"])
//     .pipe(gulp.dest("./dist/js"))
// })

// //任务3： 压缩html文件
// gulp.task("htmlCompress",function(){
//     return gulp.src("./src/html/**/*.html")
//     .pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(gulp.dest("./dist/html"))
// })

// 任务4： css压缩
// gulp.task("cssCompress",function(){
//     return gulp.src("./src/css/*css")
//     .pipe(cleanCss())
//     .pipe(gulp.dest("./dist/css"))
// })
// 任务5：js压缩
// gulp.task("jsCompress",function(){
//     gulp.src("./src/js/*.js")
//     .pipe(jsUglify())
//     .pipe(gulp.dest("./dist/js"))
// })
// 任务6：js合并
// gulp.task("jsConcat",function(){
//     gulp.src("./src/js/**/*.js")
//     .pipe(concat("index.js"))
//     .pipe(gulp.dest("./dist/js"))
// })
// 任务7：js合并并压缩
// gulp.task("jsUglify",function(){
//     gulp.src("./src/js/**/*.js")
//     .pipe(jsUglify())
//     .pipe(concat("index.min.js"))
//     .pipe(gulp.dest("./dist/js"))
// })
// //任务10：es6-es5
// gulp.task("es6Toes5",function(){
//     return gulp.src("./src/js/*.js")
//     .pipe(babel({
//         'presets':['es2015']
//     }))
//     .pipe(jsUglify())
//     .pipe(gulp.dest("./dist/js/"))

// })

// //任务8：js合并（index.js）压缩（index.min.js）
// gulp.task("jsUglify",function(){
//     return gulp.src("./src/es5/**/*.js")
//     .pipe(concat("index.js"))
//     .pipe(gulp.dest("./dist/js"))
//     .pipe(jsUglify())
//     .pipe(rename("index.min.js"))
//     .pipe(gulp.dest("./dist/js"))
// })
// //任务9：图片压缩
const imagemin = require("gulp-imagemin");
gulp.task("imageCompress",function(){

    return gulp.src(["./src/img/*jpg","./src/img/*.png"])
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/img"))

   
})


// //scss编译
// gulp.task("compile",function(){
//     return gulp.src("./src/sass/*.scss")
//     .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
//     .pipe(gulp.dest('./src/css'))
// })

// 
// 执行主任务，所有的任务一起执行
// gulp.task(任务名,gulp.series("依赖任务",cb))
// gulp.task("default", gulp.series("es6Toes5","htmlCompress","cssCompress","jsUglify","compile","imageCompress",function(){
//     // 监听任务
//     // gulp.watch("./src/css/**/*.css",["cssCompress"])
// }));




// gulp.task("jsUglify",function(){
//     pump([
//             gulp.src("./src/js/**/*.js"),
//             concat("index.js"),
//             gulp.dest("./dist/js"),
//             jsUglify(),
//             rename("index.min.js"),
//             gulp.dest("./dist/js")
//         ])
// })
// 测试
// gulp.task("jsUglify",function(){
//     pump([
//             gulp.src("./src/js/b.js"),
//             jsUglify(),
//             gulp.dest("./dist/js")
//         ])
// })



// 监听
// gulp.task("jt",function(){
//     return watch("./src/sass/*.scss",gulp.series("compile"));
// })

// 任务10：js任务监听
// 
// 
// 任务依赖

// 四.globs语法：
// globs需要处理的源文件匹配符路径，语法如下
// - 匹配单个文件：
//   gulp.src('src/js/index.js')
// - 匹配多个文件：
//    gulp.src(['src/js/index.js','src/js/detail.js']) //多个文件以数组形式传入
// - 匹配所有文件
//   gulp.src('src/js/*.js')
// - 匹配符：
//   !：排除文件，
//       gulp.src(["./src/sass/**/*.scss","!./src/sass/var.scss"])
//   *：匹配所有文件，
//   **：匹配0个或多个子文件夹，
//   {}：匹配多个属性

// 备注：若想实现某个文件不受匹配控制，在文件名前面加_


