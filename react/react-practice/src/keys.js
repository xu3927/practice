import React, {Component} from 'react'

export default class Keys extends Component{
    state = {
        nums: [],
        msg: 999
    }
    componentWillMount () {
        const nums = new Array(20).fill(1).map((item, index) => {
            return {id: index, value: `ID-${index}`}
        })
        this.setState({nums})
    }
    
    render () {
        return <div>
            <div>
                <button onClick={() => {
                    let nums = this.state.nums
                    nums[1].value = 'a'
                    nums[2].value = 'b'
                    this.setState({
                        nums
                    })
                }}>按钮</button>
            </div>
            {
                this.state.nums.map((item, index) => {
                    return <div key={item.id}>{item.value}</div>
                })
            }
        </div>
    }
}