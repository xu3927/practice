import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-snapshot'
import './index.css';
import App from './App';
// import Prerender from './prerender'
import registerServiceWorker from './registerServiceWorker';


render(<App />, document.getElementById('root'));


ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
