const webpack = require('webpack');
const EventEmitter = require('events');
const webpackConfig = require('./webpack.conf.js');
const webpackDone = new EventEmitter;
const WEBPACK_DONE_EVENT = 'webpack:done';



webpackDone.once(WEBPACK_DONE_EVENT, function() {
  // -------- NodeMon --------
  var nodemon = require('nodemon'),
    path = require('path'),
    cwd = process.cwd();

  nodemon({
    script: './index.js',
    ignore: ['build/*', 'webpack.conf.js'],
    watch: ['./src']
  });

  nodemon
    .on('start', function () {
      logger().info('Main process started. watching...');
    })
    .on('crash', function () {
      logger().info('Main process crashed.');
    })
    .on('quit', function () {
      logger().info('Main process quit.');
      process.exit();
    })
    .on('restart', function (files) {
      if (files) {
        files = files.map(function (file) {
          var _file = path.relative(cwd, file);
          return _file.indexOf('..') === 0 ? file : _file;
        });
        if (files.length) files = files[0];
      }
      logger().info({changed: files}, 'Main process is going to restart...');
    })
    .on('config:update', function (config) {
      config = config || {};
      var options = config.options || {};
      logger().info('Nodemon configured.');
      logger().info('输入`' + (options.restartable || 'rs') + '\'回车以手动重启进程');
    })
  ;
});


// -------- Webpack Watch --------
const compiler = webpack([webpackConfig]);

compiler.watch({}, function (err, stats) {
  webpackDone.emit(WEBPACK_DONE_EVENT);
  logger().info(stats.toString({
    colors: true,
    chunks: false
  }));
});

function logger () {
	return console;
}
