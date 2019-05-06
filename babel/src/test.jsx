import React from 'react'

class Test extends React.Component {
    render() {
        return <div>
            <Haha name="哈哈" value="123" onChange={() => { console.log('onchange') }}></Haha>
        </div>
    }
}