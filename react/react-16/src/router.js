import React from 'react'
import { HashRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import Demo from '@/pages/demo/index'
import Index from '@/pages/index/index.js'
import Context from '@/pages/context/index'

const routers = () => {
    return (<Router>
        <React.Fragment>
            <Switch>
                <Route path="/demo" component={Demo} />
                <Route path="/context" component={Context} />
                <Route path="/" component={Index} />
            </Switch>
        </React.Fragment>
    </Router>)
}

export default routers
