const express = require('express');
const app = express();
const http = require('http');
const url = require('url');

app.use(function (req, res, next) {
    console.log('有人访问:', 'host:', req.headers.host + '; url:' + req.url);
    next();
});

// 设置proxy转发
// app.use('/', proxy('http://localhost:3000', {
//     filter (req) {
//         return req.headers.host.indexOf('sub') < 0;
//     }
// }));


app.all('*', function (req, res) {
    res.send('Hello Word!!!');
});


const server = http.createServer(app);

server.listen(3000, function () {
    console.log('服务已启动, 监听3000端口');
});