const AppContainer = require('./App.js')
const React = require('react')
const ReactDOMServer = require('react-dom/server')

const domStr = ReactDOMServer.renderToString(<AppContainer />)
// const domStr = ''

module.exports = function () {
    return domStr
}