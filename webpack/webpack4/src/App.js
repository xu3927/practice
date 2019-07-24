import React, { Component } from 'react';

import './App.scss';


class App extends Component {
    componentDidMount() {

    }
    state = {
        showWelcome: true,
        removeWelcome: false
    }
    render() {
        return (
            <div className="App">
                <div className="title">wpk4 test</div>
            </div>
        );
    }
}



export default App

