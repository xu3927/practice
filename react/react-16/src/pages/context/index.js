import React, { Component, createContext } from 'react';
import ReactDOM from 'react-dom';
import {
    Form,
    Input
} from 'antd'
import { ThemeContext } from './create-context'

console.log(ThemeContext)

const ColorContext = createContext({
    color: 'red',
    val1: true,
    changeColor() { }
})

class Display extends Component {

    render() {
        return <div>
            <ThemeContext.Consumer>
                {({ fontSize }) => {
                    return (<ColorContext.Consumer>
                        {(arg1, arg2, arg3) => {
                            const { color } = arg1
                            console.log(6789, arg1, arg2, arg3)
                            return <div style={{ fontSize: fontSize, color: color }}>{this.props.text || 'display'}</div>
                        }}
                    </ColorContext.Consumer>)
                }}
            </ThemeContext.Consumer>
        </div>
    }
}

class Handler extends Component {
    render() {
        return <div>
            <ThemeContext.Consumer>
                {(a, b, c) => {
                    const { enlardge, reduce } = a
                    console.log('consumer-Handler', a, b, c)
                    return <div>
                        <button onClick={enlardge}>+</button>
                        <span style={{ width: '20px', display: 'inline-block' }}></span>
                        <button onClick={reduce}>-</button>
                    </div>
                }}
            </ThemeContext.Consumer>
        </div>
    }
}


class ContextProvider extends Component {
    state = {
        size: 20,
        colorIndex: 3
    }
    enlardge = () => {
        console.log('ContextProvider-enlardge:')
        this.setState({
            size: ++this.state.size
        })
    }
    reduce = () => {
        console.log('ContextProvider-reduce:')
        this.setState({
            size: --this.state.size
        })
    }
    colorList = ['red', 'yellow', 'blue', 'skyblue']
    changeColor = () => {
        console.log('456789876')
        this.setState({
            colorIndex: ++this.state.colorIndex
        })
    }
    render() {
        console.log('ContextProvider:', this.props, this.context)


        return <div>
            <ColorContext.Provider value={{ color: this.colorList[this.state.colorIndex % 4], changeColor: this.changeColor, val2: true }}>
                <ThemeContext.Provider value={{
                    valName: 'from-provider',
                    fontSize: this.state.size,
                    enlardge: this.enlardge,
                    reduce: this.reduce
                }}>
                    <Handler></Handler>
                    <ChangeColorHandler></ChangeColorHandler>
                    <Display text="provier内的 consumer"></Display>
                </ThemeContext.Provider>
            </ColorContext.Provider>
        </div>
    }
}



class ColorProvider extends Component {
    state = {
        colorIndex: 1
    }
    colorList = ['red', 'yellow', 'blue', 'skyblue']
    changeColor = () => {
        console.log('ColorProvider-changeColor:')
        this.setState({
            colorIndex: ++this.state.colorIndex
        })
    }
    render() {
        console.log('ColorProvider:', this.props, this.context)
        return <div>
            <ColorContext.Provider value={{
                valName: 'from-color-provider',
                color: this.colorList[this.state.colorIndex % this.colorList.length],
                changeColor: this.changeColor
            }}>
                <ColorContext.Consumer>
                    {
                        ({ color, changeColor }) => {
                            return <div >
                                <div style={{ color: color }}>我的颜色</div>
                                <div>
                                    <button onClick={changeColor}>变色</button>
                                </div>
                            </div>
                        }
                    }
                </ColorContext.Consumer>
            </ColorContext.Provider>
        </div>
    }
}

const ChangeColorHandler = () => {
    return <ColorContext.Consumer>
        {
            ({ changeColor }) => {
                return <div >
                    <div>
                        <button onClick={changeColor}>变色</button>
                    </div>
                </div>
            }
        }
    </ColorContext.Consumer>
}


class CtxType extends React.Component {
    componentDidMount() {
        console.log('CtxType-componentDidMount:', this.context)
    }
    componentDidUpdate() {
        let value = this.context;
        /* ... */
        console.log('CtxType-componentDidUpdate:', this.context)
    }
    render() {
        console.log('CtxType:', this.context)
        return <div style={{ fontSize: 1.5 * this.context.fontSize }}>CtxType</div>
    }
}

CtxType.contextType = ThemeContext


class ContextTest extends Component {
    state = {
        fontSize: 20
    }
    render() {

        return (
            <div>
                <h3>一个 provider</h3>
                <div>
                    <ContextProvider></ContextProvider>
                </div>
                <hr />
                <h3>再次应用 provider</h3>
                <div>
                    {/* 同一个 provider 多次使用，互相独立。不会相互影响 */}
                    {/* <ContextProvider></ContextProvider> */}
                </div>
                <hr />
                <h3> provider 外面使用 comsumer</h3>
                <div>
                    <Display text="provier外的 consumer"></Display>
                </div>
                <hr />
                <h3> ColorProvider</h3>
                <ColorProvider></ColorProvider>
                <CtxType></CtxType>
            </div>
        );
    }
}

export default ContextTest