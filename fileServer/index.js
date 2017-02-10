/**
 * Created by 3927 on 2017/2/7 1:06.
 */

var express = require('express');
var app = express();
var port = 3000;
var File = require('file');
var filePath = '../files';


var mp4Files = readAllMp4Files();
serve(mp4Files);

function readAllMp4Files () {
    var mp4FilesArr = [];
    File.walkSync(filePath, function (dirPath, dirs, files) {
        if (files.length > 0) {
            for (var i = 0, l = files.length; i < l; i++) {
                if (files[i].indexOf('.mp4') === files[i].length - 4) {
                    var _l = filePath.length + 1;
                    var _dirPath = dirPath.slice(9);
                    mp4FilesArr.push(_dirPath + '\\' + files[i]);
                }
            }
        }
    });
    return mp4FilesArr;
}

function serve (mp4Files) {
    app.use(express.static(filePath));
    app.use(express.static('static'));
    // 设置视图模板
    app.set('view engine', 'ejs');
    // 设置视图文件夹
    app.set("views","./views");
    // 请求所有的mp4文件列表
    app.post('/mp4list', function(req, res) {
       res.send({
           status: 0,
           data: mp4Files
       })
    });
    // app.get('/', function (req, res){
    //     // res.render('index.ejs', {
    //     //     videos: mp4Files
    //     // });
    // });
    app.listen(port);
    console.log('服务器已建立, 监听端口' + port);
}
