import React, { Component } from 'react'

const colors = [
    'yellow',
    'silver',
    'grey',
    'black',
    'navy',
    'blue',
    'cerulean',
    'skyblue',
    'turquoise',
    'blue-green',
    'azure',
    'teal',
    'cyan',
    'green',
    'lime',
]

/**
 * # 生命周期
 * ## mount 过程
 * 1. componentWillMount
 * 2. render
 * 3. componentDidMount
 *
 * ## unmount 过程
 * 1. componentWillUnmount
 *
 * ## state update 过程
 * 1. shouldComponentUpdate
 * 2. componentWillUpdate()
 * 3. render
 * 4. componentDidUpdate
 *
 * ## props change
 * 1. componentWillReceiveProps
 * 2. shouldComponentUpdate
 * 3. componentWillUpdate()
 * 4. render
 * 5. componentDidUpdate
 */

/**
 * # react 16中生命周期
 *
 * ## Mounting阶段, 当一个组件的实例被创建或插入到页面中时
 * constructor()
 * static getDerivedStateFromProps()
 * render()
 * componentDidMount()
 *
 * ## Updating 阶段, 当props or state改变的时候会触发 re-rendered, 会触发下面的一组方法
 * static getDerivedStateFromProps()
 * shouldComponentUpdate()
 * render()
 * getSnapshotBeforeUpdate()
 * componentDidUpdate()
 *
 * ## Unmounting 当一个组件被移除的时候会触发以下过程
 * componentWillUnmount()
 *
 * ## Error Handling 当组件 rerendering 时, 如果该组件生命周期的某个阶段有错误或者子组件的 constructor 中有错误, 则会触发以下方法,
 * static getDerivedStateFromError()
 * componentDidCatch()
 *
 * ## react 16 准备弃用的生命周期
 * componentWillMount
 * componentWillReceiveProps
 * componentWillUpdate
 *
 * ## 新增的生命周期
 *
 */

class Like extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: props.init,
            colorIndex: props.colorIndex,
            prePropColorIndex: props.colorIndex,
        }
        this.like = this.like.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }
    like() {
        this.setState({
            num: this.state.num + 1,
        })
    }
    changeColor() {
        this.setState({
            colorIndex: this.state.colorIndex + 1,
        })
    }

    /**
     * 在 mutations 即 DOM 更新之前触发的方法, return 的值会作为 componentDidUpdate 的第三个参数
     * props, state  改变时会触发.
     * 在父组件re-render 时也会触发, 无论 props 是否有变化
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate:', prevProps, prevState)
        return 'snapShot'
    }

    /**
     * 相当于原来的componentWillReceiveProps
     * 可以在该过程中根据 props 来修改 state 的值, 如果state 不需要根据 props 来改动, 可以 return null
     * 在willMount 和 willUpdate时会被调用. 需要return一个对象, 该对象会被merge到新的state上
     * 在getDerivedStateFromProps里面可以从props中取值来设置 initState
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps:', nextProps, prevState)
        // 如果 prevState 不存在, 则设置为后面的值
        let initState = {
            haha: '哈哈',
            num: nextProps.init,
            day: 888,
        }
        if (nextProps.num % 3 == 0) {
        }
        // 判断 propschange，通过把上一个 props 的值绑定到 state 上来进行判断
        if (nextProps.colorIndex !== prevState.prePropColorIndex) {
            prevState.colorIndex = nextProps.colorIndex
            prevState.prePropColorIndex = nextProps.colorIndex
        }

        let state = prevState || initState
        console.log('prevState2:', prevState)
        // return null
        return initState
    }

    /**
     * props, state  改变时会触发.
     * 在父组件re-render 时也会触发, 无论 props 是否有变化
     */
    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log('componentWillReceiveProps');
    // }

    // componentWillMount() {
    //     console.log('componentWillMount');
    // }

    componentDidMount() {
        console.log('componentDidMount')
    }

    // 如果 return 了 false 则组件不更新
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate:', nextProps, nextState)
        // num为单数更新, 双数不更新
        if (nextState.num % 2 == 0) {
            return false
        }
        return true
    }
    // componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }

    /**
     * componentDidUpdate 组件updating 之后触发, 在初始 render 时不会触发
     * 在该周期中可以做一些 dom 操作
     * 也可以在该组件中判断新旧 props 是否有变更, 并发出 ajax 请求
     * 在该周期中也可以调用 setState, 但是通常需要有条件 约束, 否则会触发不停的render
     *
     * @param {*} prevProps 更新之前的 props
     * @param {*} prevState 更新之前的上一次的 state
     * @param {*} snapshot getSnapshotBeforeUpdate 方法中 return 的值
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')
        let _color = colors[this.state.colorIndex % colors.length]
        return (
            <div
                style={{
                    padding: '20px',
                    fontSize: this.props.fontSize + 'px',
                    border: '3px solid red',
                }}
            >
                <div>
                    <span style={{ marginRight: '10px', color: _color }}>
                        {this.state.num}
                    </span>
                    <button onClick={this.like}>赞</button>
                    <button onClick={this.changeColor}>更改自身组件颜色</button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            console.log(this.state)
                        }}
                    >
                        打印当前 state
                    </button>
                </div>
            </div>
        )
    }
}

class Show extends React.Component {
    state = {
        show: true,
        fontSize: 10,
        colorIndex: 0,
    }
    toggle() {
        this.setState({
            show: !this.state.show,
        })
    }
    zoom() {
        this.setState({
            fontSize: this.state.fontSize + 2,
        })
    }
    changeColor() {
        this.setState({
            colorIndex: this.state.colorIndex + 1,
        })
    }
    render() {
        let _color = colors[this.state.colorIndex % colors.length]
        return (
            <div style={{ border: '1px solid #000' }}>
                <div>
                    <button onClick={this.toggle.bind(this)}>
                        切换子组件 mount
                    </button>
                    <button onClick={this.zoom.bind(this)}>
                        增大子组件文字
                    </button>
                    <button onClick={this.changeColor.bind(this)}>
                        更改自身和子组件颜色
                    </button>
                </div>
                <div style={{ color: _color }}>当前父组件颜色为{_color}</div>
                {this.state.show && (
                    <Like
                        init={23}
                        fontSize={this.state.fontSize}
                        colorIndex={this.state.colorIndex}
                    />
                )}
            </div>
        )
    }
}

export default Show
