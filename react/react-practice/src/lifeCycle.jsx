import React, {Component} from 'react'

/**
 * Life cycle 生命周期
 *
 *
 */
class LifeCycle extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '蝴蝶'
        }
    }
    componentWillMount () {

    }
    render(){
        return <div>{this.state.name}</div>
    }
    componentDidMount () {

    }
    componentWillReceiveProps(nextProps, nextState){

    }
    componentWillUpdate(nextState){

    }
    componentWillUnmount () {

    }

}

export default LifeCycle