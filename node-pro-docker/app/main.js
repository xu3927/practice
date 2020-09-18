const Koa = require("koa");
const app = new Koa();
console.log("start");
app.use(async (ctx) => {
  console.log('收到请求:', ctx.path);
  ctx.body = "Hello World" + "path:" + ctx.path;
});

app.listen(8080);
console.log("服务已启动");
console.log("监听端口 8080");
console.log('ttt')