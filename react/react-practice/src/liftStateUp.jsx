import React, {Component} from 'react'

function toCelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit (celsius) {
    return (celsius * 9 / 5) + 32;
}

class CelsiusInp extends Component{
    constructor(props){
        super(props)
        this.state = {
            C: props.tmp
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(event){
        const C = parseFloat(event.target.value)
        this.setState({
            C: C
        })
        this.props.onChange && this.props.onChange(C)
    }
    render(){
        return (
            <div className="celsius">
                <input type="text" value={this.props.tmp} onChange={this.onChange}/>
            </div>
            )
    }
}

class FahrenheitInp extends Component{
    constructor(props){
        super(props)
        this.state = {
            F: props.tmp
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(event){
        const F = event.target.value
        // this.setState({
        //     F: F
        // })
        this.props.onChange && this.props.onChange(F)
    }
    render(){
        const F = this.props.tmp
        return (
            <div className="fahrenheit">
                <input type="text" value={F} onChange={this.onChange}/>
            </div>
            )
    }
}

class BoilingVerdict extends Component{
    constructor (props) {
        super(props)
    }
    render() {
        const tem = parseFloat(this.props.tmp)
        const res = tem >= 100 ? '沸腾' : '未沸腾'
        return (<div className="calculator">
            {res}
        </div>)
    }
}


class LiftStateUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            C: 0,
            F: 0
        }
        this.handleCelChange = this.handleCelChange.bind(this)
        this.handleFaChange = this.handleFaChange.bind(this)
    }
    handleCelChange(t){
        this.setState({
            C: t,
            F: toFahrenheit(t)
        })
    }
    handleFaChange(f){
        this.setState({
            C: toCelsius(f),
            F: f
        })
    }
    render () {
        return (
            <div className="liftStateUp">
                <CelsiusInp tmp={this.state.C} onChange={this.handleCelChange}></CelsiusInp>
                <FahrenheitInp tmp={this.state.F} onChange={this.handleFaChange}></FahrenheitInp>
                <BoilingVerdict tmp={this.state.C}></BoilingVerdict>
            </div>
        )
    }
}

export default LiftStateUp
