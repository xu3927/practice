import React, {Component} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from '../store/reducers'
import TodoList from './todoList'
import VisibleTodoList from './visibleTodoList';
import AddTodo from './addTodo';
import Footer from './footer'

const store = createStore(rootReducer)

class Container extends Component{
    
    render () {

        return (<div>
            <AddTodo></AddTodo>
            <TodoList></TodoList>
            <VisibleTodoList />
            <Footer/>
        </div>)
    }
}



export default () => (
    <Provider store={store}>
        <Container></Container>
    </Provider>)