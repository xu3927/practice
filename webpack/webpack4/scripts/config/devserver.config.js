const paths = require('./paths')

module.exports = {
    hot: true,
    quiet: false,
    stats: { colors: true },
    compress: true,
    contentBase: [paths.appPublic],
    proxy: {
        '/api': {
            target: {
                host: 'localhost',
                protocol: 'http:',
                port: 80,
            },
            ignorePath: true,
            changeOrigin: true,
            secure: false,
        },
    },
}
