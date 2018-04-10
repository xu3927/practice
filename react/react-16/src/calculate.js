
import React,{ Component } from 'react';


class Calculate extends Component{

    state = {
        first: 0,
        second: 0,
        result: ''
    }

    inpChange = (type) => {
        return (event) => {
            const state = {}
            state[type] = event.target.value
            this.setState(state)
        }
    }

    render(){

        const result = this.state.first + this.state.second

        return(<div>

            <input value={this.state.first} onChange={this.inpChange('first')} type="number"/>
            <span style={{padding: '10px'}}> + </span>
            <input value={this.state.second} onChange={this.inpChange('second')} type="number"/>
            <span style={{padding: '10px'}}> = </span>
            <span style={{display: 'inline-block', border: '1px solid #aaa', width: '100px'}}>{result}</span>
        </div>)
    }
}

export default Calculate