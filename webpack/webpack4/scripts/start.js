'use strict'

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
    throw err
})

const chalk = require('chalk')
const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const { choosePort } = require('react-dev-utils/WebpackDevServerUtils')
const openBrowser = require('react-dev-utils/openBrowser')
const clearConsole = require('react-dev-utils/clearConsole')

const config = require('./config/webpack.config.dev')
const devServerConfig = require('./config/devserver.config')

// const useYarn = fs.existsSync(paths.yarnLockFile);
const isInteractive = process.stdout.isTTY

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000
const HOST = '127.0.0.1'

if (process.env.HOST) {
    console.log(
        chalk.cyan(
            `Attempting to bind to HOST environment variable: ${chalk.yellow(
                chalk.bold(process.env.HOST)
            )}`
        )
    )
    console.log(
        `If this was unintentional, check that you haven't mistakenly set it in your shell.`
    )
    console.log(`Learn more here: ${chalk.yellow('http://bit.ly/2mwWSwH')}`)
}

// We attempt to use the default port but if it is busy, we offer the user to
// run on a different port. `choosePort()` Promise resolves to the next free port.
choosePort(HOST, DEFAULT_PORT)
    .then((port) => {
        if (port == null) {
            // We have not found a port.
            return
        }

        // 启用 HMR, 增加 HMR entry
        WebpackDevServer.addDevServerEntrypoints(config, devServerConfig)

        // Create a webpack compiler that is configured with custom messages.

        const compiler = webpack(config)

        // 文件变动时触发 watch 方法.
        // const watching = compiler.watch(
        //     {
        //         // Example watchOptions
        //         aggregateTimeout: 2000,
        //         poll: false,
        //     },
        //     (err, stats) => {
        //         // Stats Object
        //         // Print watch/build result here...
        //         console.log('watching:', stats)
        //     }
        // )
        // 关闭 watch
        // watching.close(() => {
        //     console.log('Watching Ended.')
        // })

        const devServer = new WebpackDevServer(compiler, devServerConfig)
        // Launch WebpackDevServer.
        devServer.listen(port, HOST, (err) => {
            if (err) {
                return console.log(err)
            }
            if (isInteractive) {
                // clearConsole()
            }
            console.log(chalk.cyan('Starting the development server...\n'))
            // openBrowser(`http://${HOST}:${DEFAULT_PORT}`)
        })
        ;['SIGINT', 'SIGTERM'].forEach(function (sig) {
            process.on(sig, function () {
                devServer.close()
                process.exit()
            })
        })
    })
    .catch((err) => {
        if (err && err.message) {
            console.log(err.message)
        }
        process.exit(1)
    })
