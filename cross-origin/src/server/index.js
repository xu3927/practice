const express = require('express');
const app = express();
const http = require('http');
const proxy = require('express-http-proxy');
const ws = require('ws'); // websockt 协议
const url = require('url');
const cors = require('cors'); // 跨域 库

app.use(function (req, res, next) {
    console.log('req:', req);
    console.log('有人访问:', 'host:', req.headers.host + '; url:' + req.url);
    next();
});
const whitelist = ['http://localhost.com', 'http://localhost']
let corsConfig = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) >= 0) {
            callback(null, true);
        } else {
            callback(new Error('该域名不被允许访问'));
        }
    },
    optionsSuccessStatus: 200,
    credentials: true // 是否同意传递cookie和http认证信息
};
// app.use(cors); // 允许所有跨域
// 设置具体单个请求的跨域
app.all('/cors', cors(corsConfig), function (req, res, next) {
    console.log('cors');
    res.json({
        msg: 'cors路径匹配到了跨域请求'
    });
});

// 设置proxy转发
// app.use('/', proxy('http://localhost:3000', {
//     filter (req) {
//         return req.headers.host.indexOf('sub') < 0;
//     }
// }));

app.use(express.static(__dirname + '/static'));

// jsonp跨域请求
app.all('/jsonp', (req, res) => {
    const fn = req.query.callback || 'callback';
    const data = {
        data: '这里有部葵花宝典'
    };
    res.end(fn + '(' + JSON.stringify(data) + ')');
});

app.all('/linghuchong', (req, res, next) => {
    res.send('我是令狐冲');
});

app.all('*', function (req, res) {
    res.send('Hello Word!!!');
});

// websocket server. 结合express设置 参考 https://github.com/websockets/ws
const server = http.createServer(app);
const wss = new ws.Server({server});
wss.on('connection', (ws, req) => {
    const location = url.parse(req.url, true);
    ws.on('message', function (message) {

        // ws.send('From server:' + message); // 给当前发送消息的client 单个回复消息.

        // 给所有client broadcast消息
        wss.clients.forEach(client => {
            client.send('Broadcast:' + message);
        });
    });
    ws.send('Hello client');
});

server.listen(3001, function () {
    console.log('服务已启动, 监听3001端口');
});2