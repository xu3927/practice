import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react'
import Comp1 from './module/comp1'
import Comp2 from './module/comp2'
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
                <div>骨灰级</div>
                <Comp1></Comp1>
                <Comp2></Comp2>
            </div>
        )
    }
}

export default hot(App)
