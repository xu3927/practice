import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactDOMServer from 'react-dom/server';
import registerServiceWorker from './registerServiceWorker';

var domStr = ReactDOMServer.renderToString(<App></App>)

// server-side render
document.getElementById('root').innerHTML = domStr

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
