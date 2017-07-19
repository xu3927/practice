var Koa = require('koa');
var Http = require('http');
var fs = require('fs')
var KoaStatic = require('koa-static')

const port = 3000;


function createServer () {
	// 启动
	const app = new Koa();

	// x-response-time

	app.use(async function (ctx, next) {
	  const start = new Date();
	  await next();
	  const ms = new Date() - start;
	  ctx.set('X-Response-Time', `${ms}ms`);
	});

	// logger

	app.use(async function (ctx, next) {
	  const start = new Date();
	  await next();
	  const ms = new Date() - start;
	  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
	});

	// middleware
	app.use(KoaStatic(__dirname + '/static', {
		maxage: 360000
	}));

	app.use(async function (ctx, next) {
		console.log('访问链接为:', ctx.url, ctx.method);
		// 设置状态码
		const url = ctx.url;
		switch (url) {
			case '/haha':
				ctx.body = '哈哈哈'
				break			
			case '/302':
			    // 设置重定向
				ctx.response.redirect('http://localhost:3000/haha')
				break;
			case '/303':
				// 临时重定向
				ctx.response.status = 303
				ctx.response.set('location', 'http://localhost:3000/haha')
				break;
			case '/307':
				// 临时重定向
				ctx.response.status = 303
				ctx.response.set('location', 'http://localhost:3000/haha')
				break;	
			default:
				await next()
		}
	})

	// response

	app.use(ctx => {
	  ctx.body = 'Hello World';
	});

	const server = Http.createServer(app.callback());
	server.listen(port);
	console.log('启动服务监听' + port + '端口');
}

createServer();
