import PropTypes from 'prop-types';
import React from 'react'

/**
 * prop-types 类型检查。
 * 类型不符合会在控制台提示
 */
class PropTypeComp extends React.Component{
    render () {
        return (<div>
            <p>类型检查 PropTypes</p>
            <p>字符串: {this.props.content}</p>
            <p>布尔: {this.props.bool}</p>
            <p>设置默认: {this.props.defaultVal}</p>
        </div>)
    }
}

// console.log('PropTypes：', PropTypes)

PropTypeComp.defaultProps = {
    defaultVal: '我是默认值'
}

PropTypeComp.propTypes = {
    content: PropTypes.string,
    bool: PropTypes.bool
}

export default PropTypeComp;