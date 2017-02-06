var express = require('express');
var formidable = require('formidable'); // 处理文件上传

var app = express();
// 静态文件中间件 __dirname 获取当前node文件所在的绝对路径
app.use(express.static(__dirname + '/../static'));

app.use(function (req, res, next) {
	next();
});

// 设置路由
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// 接受表单提交
app.post('/tijiao', function (req, res) {
    var form = new formidable.IncomingForm();
    console.log(req.path);
    form.keepExtensions = true; // 保留文件的信息
    form.uploadDir = './files';
    form.on('file', function (name, file) {
        console.log(name + '上传成功');
    })
    form.parse(req, function(err, fields, files) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        // res.end(util.inspect({fields: fields, files: files}));
    });
    res.send('ok');
});

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
