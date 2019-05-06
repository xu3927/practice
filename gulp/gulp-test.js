let gulp = require('gulp')

// 定义task

function tt() {
    console.log('tt')
}
tt.description = 'tt'
// gulp.task(tt)


// 定义 task
gulp.task(function someTask() {
    // Do stuff
    console.log('someTask')
  });

gulp.task('test', [], function () {
    console.log('test')
})
gulp.task('default', [], function () {
    console.log('default')
})