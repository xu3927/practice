import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactDOMServer from 'react-dom/server';
import registerServiceWorker from './registerServiceWorker';

function Timer (fn) {
    setInterval(fn, 100)
}

class Clock extends Component{
    render() {
        return(
            <div className="clock">
                <h4>时钟</h4>
                <p>{new Date().getSeconds()}</p>
            </div>
        )
    }
}

class Wuxia extends Component {
    render () {
        return(
            <div>
                <h3>武侠世界</h3>
                <ul>
                    <li>少林派</li>
                    <li>武当派</li>
                    <li>华山派</li>
                </ul>
                <p>{Clock}</p>
            </div>
        )
    }
}

var domStr = ReactDOMServer.renderToString(<App></App>)


// server-side render
document.getElementById('root').innerHTML = domStr


ReactDOM.render(<App />, document.getElementById('root'));

Timer(function () {
    ReactDOM.render(<Wuxia></Wuxia>, document.getElementById('root2'))
})

registerServiceWorker();
