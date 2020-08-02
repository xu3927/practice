import React, { Component } from 'react'
import Comp1 from './module/comp1'
import './App.scss'

class App extends Component {
    componentDidMount() {}
    state = {
        showWelcome: true,
        removeWelcome: false,
    }
    render() {
        return (
            <div className="App">
                <div className="title">2aa 77 test</div>
                <div>骨灰级556</div>
                <Comp1></Comp1>
            </div>
        )
    }
}

export default App
