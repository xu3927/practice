# node版本 7.9.0

# npm run start 启动webpack-dev-server, 打开服务器1

# 切换到src/server目录下, node index.js 启动服务器2

# 跨域测试

通过chrome的代理插件如 switchyOmega 来设置域名拦截转发
如:
网址通配符 *://sub.localhost.com/* 转发到 127.0.0.1:3001
网址通配符 *://localhost.com/* 转发到 127.0.0.1:3000

也可以在server服务器中通过 express-http-proxy 插件来设置请求转发