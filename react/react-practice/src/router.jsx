import React from 'react';
import {BrowserRouter,
     Route,
     Switch,
     Link} from 'react-router-dom'

import element from './createElement'
import BaseInfo from './formElement.jsx'
import LiftStateUp from './liftStateUp.jsx'
import PropTypes from './propTypes.jsx'
import LifeCycel from './lifeCycle.jsx'
import ReducerPractice from './reduxPractice/reducer.jsx'
import ReduxPractice from './reduxPractice/index.jsx'  
import TodoList from './todoList/index'
import MaterialUi from './materialUi/index'
import AntdPractice from './antdPractice/index'
import Keys from './keys'



const routeMap = [{
    path: '/ReduxPractice',
    component: ReduxPractice
}, {
    path: '/ReducerPractice',
    component: ReducerPractice
}, {
    path: '/BaseInfo',
    component: BaseInfo
}, {
    path: '/LiftStateUp',
    component: LiftStateUp
}, {
    path: '/PropTypes',
    component: PropTypes,
    props: {
        content:'字符串',
        bool: true
    }
}, {
    path: '/LifeCycle',
    component: LifeCycel
}, {
    path: '/TodoList',
    component: TodoList
}, {
    path: '/materialUi',
    component: MaterialUi
}, {
    path: '/antd',
    component: AntdPractice
}, {
    path: '/keys',
    component: Keys
},]


const RouteComponent = () => {
    /**
     * route 有3种形式, component, render, children
     * 为children时无论路由是否匹配到都会执行
     */
    return (<BrowserRouter>
        <div>
            <Switch>
                <Route path='/haha' render={() => <div>哈哈</div>}></Route>
                <Route path='/element' render={() => <div>{element}</div>}></Route>
                {routeMap.map((item, index) => (
                    <Route
                        key={index}
                        path={item.path} 
                        render={props => (
                        <item.component {...{...props, ...item.props}}/> 
                    )}/>))}
                {/* 默认页面 */}
                <Route children={({match}) => {
                    return (
                        <div>404</div>
                    )
                }}/>
            </Switch>
        </div>
    </BrowserRouter>)
}


export default RouteComponent