import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import List from './list'


class Demo extends React.Component {
    render() {
        return (<div className="demo">
            <List></List>
        </div>)
    }
}

export default Demo
