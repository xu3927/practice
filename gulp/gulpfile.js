let gulp = require('gulp')
let path = require('path')
let sass = require('gulp-sass');
let babel = require('gulp-babel')
let cleanCSS = require('gulp-clean-css'); // 压缩css
let uglify = require('gulp-uglify'); // 压缩js
let rename = require('gulp-rename'); // 重命名文件
let webserver = require('gulp-webserver') // 启动一个server
let pump = require('pump')
let errorHandler = require('gulp-error-handle');
var plumber = require('gulp-plumber');
var gulpif = require('gulp-if'); // 条件判断
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// 获取当前的模式是线上版本还是开发版本
let isProduction = process.env.NODE_ENV === 'production' // 是否是线上发布版本

gulp.task('copy', [], function () {
    gulp.src([
        './src/*.html',
        './src/*.css',
        './src/**/*.{jpg,jpeg,png,gif}'
    ])
    .pipe(errorHandler(logError))
    .pipe(gulp.dest('./build'))
})

gulp.task('sass', [], function () {
    var plugins = [
        // 自动添加css兼容不同浏览器的前缀
        autoprefixer({browsers: ['cover 99.5%', 'ie 6-8']})
    ];

    return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulpif(isProduction, cleanCSS()))
    .pipe(gulp.dest('./build'))
    .on('end', () => {
        console.log('sass build 完成')
    })
})

// 编译js
gulp.task('js', [], function (done) {
    gulp.src('./src/**/*.js')
    .pipe(plumber()) // 错误处理
    // babel编译js
    .pipe(babel({
        presets: ['@babel/env']
    }))
    // 捕捉编译过程中的错误并输出
    // .on('error', function (error) {
    //     console.log(error)
    //     done(error)
    // })
    .pipe(gulpif(isProduction, uglify()))
    // 错误捕获
    // .on('error', function (error) {
    //     console.log(error)
    //     done(error)
    // })
    // .pipe()
    // .pipe(errorHandler())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./build'))
    // pipe流处理完成后触发end事件
    .on('end', () => {
        console.log('js build 完成')
    })
})

gulp.task('server', function() {
    // server的 root 目录
    gulp.src('build')
        // 启动一个server 监听8000端口, 
      .pipe(webserver({
        port: 8000,
        // path: '/',
        open: 'http://localhost:8000',
        livereload: true, // 热加载
        open: true
      }));
});

gulp.task('watch', [], function () {
    return gulp.watch('./src/**', ['default'])
})

gulp.task('dev', ['watch', 'server'])

gulp.task('default', ['copy', 'sass', 'js'], function () {
    console.log('编译完成')
})


// 定义 task
function someTask() {
    // Do stuff
    console.log('someTask')
  }
  someTask.name = 'someTask'
  someTask.displayName = 'some-task'
gulp.task('someTask', someTask);