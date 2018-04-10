import React, {Component} from 'react'

class BaseInfo extends Component{
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            menpai: '',
            sex: 'male',
            age:20
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.menpaiChangeHandler = this.menpaiChangeHandler.bind(this)
        this.selectHandler = this.selectHandler.bind(this)
    }
    menpaiChangeHandler (event) {
        this.setState({
            menpai: event.target.value
        })
    }
    submitHandler (event) {
        console.log('submit', this.state)
        event.preventDefault()
    }
    selectHandler (event) {
        this.setState({
            age: event.target.value
        })
    }
    render() {
        return(
            <div className="baseInfo">
                <h3>报名表</h3>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <span>门派</span>
                        <input type="text" id="menpai" name="menpai" value={this.state.menpai} onChange={this.menpaiChangeHandler}/>
                    </div>
                    <div>
                        <span>性别</span>
                        <label htmlFor="male">
                            <span>男</span>
                            <input type="radio" id="male" name="sex" value="male" />
                        </label>
                        <label htmlFor="female">
                            <span>女</span>
                            <input type="radio" id="female" name="sex" value="female"/>
                        </label>
                    </div>
                    <div>
                        <span>年龄</span>
                        <select name="age" id="age" value={this.state.age} onChange={this.selectHandler}>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">提交</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default BaseInfo