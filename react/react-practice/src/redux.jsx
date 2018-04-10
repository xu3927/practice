import React, {Component} from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

// 定义action厂里类型, action是一个普通的js对象, 用来描述要发生的事情

const ADD = 'ADD'
const MINUS = 'MINUS'

// action创建函数. 
function add(value){
    return {
        type: ADD,
        value
    }
}

function minus(value){
    return {
        type: MINUS,
        value
    }
}


// reducer

const calculate = function(state, action) {
    switch (action.type) {
        case ADD:
            state.num += action.value
        case MINUS:
            state.num -= action.value
        default:
            return state
    }
}

const reducers = combineReducers(calculate)


// store

const _state = {
    val: 0
}

let store = createStore(reducers, {num: 100})



class APP extends Component{
    constructor(props){
        super(props)
        console.log('asdfg', props)
    }
    state = {
        inp: 0,
        result: 0
    }
    minus = () => {
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        dispatch(minus(this.state.inp))
    }

    add = () => {
        const { dispatch, visibleTodos, visibilityFilter } = this.props

        dispatch(add(this.state.inp))
    }

    render(){
console.log('8899', this.props)
        return <div>
            <p>redux练习</p>
            <p>
                <input style={{width: "60px"}} type="number" value={this.state.inp} onChange={(event) =>{
                    this.setState({inp: event.target.value})
                }}/>

            </p>
            <p>
                <button onClick={this.minus}> 减 </button>
                <button onClick={this.add}> 加 </button>
            </p>
            <p>计算结果: {this.state.result}</p>
        </div>
    }
}

const APPConnet = connect(_state => _state)(APP)

class ReduxPractice extends Component{

    render(){
        return <Provider store={store}>
            <APPConnet></APPConnet>
        </Provider>
    }
}


export default ReduxPractice