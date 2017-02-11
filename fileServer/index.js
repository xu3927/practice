/**
 * Created by 3927 on 2017/2/7 1:06.
 */
var express = require('express');
var fs = require('fs');
var app = express();
var port = 3000;
var File = require('file');
var filePath = '../h5';

var mp4Files = readAllMp4Files();
serve(mp4Files);

function readAllMp4Files () {
    var mp4FilesArr = [];
    File.walkSync(filePath, function (dirPath, dirs, files) {
        console.log('dirPath:', dirPath);
        if (files.length > 0) {
            for (var i = 0, l = files.length; i < l; i++) {
                if (files[i].indexOf('.mp4') === files[i].length - 4) {
                    var _l = filePath.length;
                    var _dirPath = dirPath.slice(_l);
                    console.log('_dirPath:', _dirPath);
                    mp4FilesArr.push('video' + _dirPath + '/' + files[i]);
                }
            }
        }
    });
    return mp4FilesArr;
}

function serve (mp4Files) {
    // 设置视图模板
    app.set('view engine', 'ejs');
    // 设置视图文件夹
    app.set("views","./views");

    // 中间件
    app.use(function (req, res, next) {
        console.log('访问:', req.url);
        next();
    });
    // 请求video文件(MP4)
    app.get('/video/*', function (req, res){
        var fileDir = req.url.slice(7);
        var stream = fs.createReadStream(filePath + '/' + fileDir);
        console.log('stream:', stream);
        stream.pipe(res);
    });
    app.use(express.static(filePath));
    app.use(express.static('static'));
    /**
     * 路由列表
     */
    // 请求所有的mp4文件列表
    app.post('/mp4list', function(req, res) {
       res.send({
           status: 0,
           data: mp4Files
       })
    });
    // 默认页面
    app.all('*', function (req, res) {
       res.send('没有这个页面');
    });
    app.listen(port);
    console.log('服务器已建立, 监听端口' + port);
}
