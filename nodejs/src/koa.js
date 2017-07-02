import koa from 'koa';
import http from 'http';

const port = 3000;



function createServer () {
	// 启动
	const app = new Koa();

	app.use(ctx => {
	  ctx.body = 'Hello World';
	});

	const server = Http.createServer(app.callback());
	server.listen(port);
	console.log('启动服务监听' + port + '端口');
	}

export default function init () {
	createServer();
}