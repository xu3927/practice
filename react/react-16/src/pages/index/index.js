import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Calculate from './calculate'

class Demo extends React.Component {
    render() {
        return (<div className="index">
            <h3>Index</h3>
            <div>
                <Calculate />
            </div>
        </div>)
    }
}

export default Demo
