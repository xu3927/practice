// 文档参考 https://github.com/lwsjs/local-web-server/wiki/API-reference

const LocalWebServer = require('local-web-server')

const config = require('./lws.config.js')

const localWebServer = new LocalWebServer()

const server = localWebServer.listen(config)


// Stop listening when/if server is no longer needed
// server.close() 