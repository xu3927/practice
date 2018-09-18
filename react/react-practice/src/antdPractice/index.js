import React from 'react'
import 'antd/lib/button/style'
import {Button} from 'antd'
import './index.css'

class Component extends React.Component{

    render () {
        return (<div>
            <div>ant design</div>
            <div>
                <Button type="primary">按钮</Button>
            </div>
           
        </div>)
    }
}

export default Component