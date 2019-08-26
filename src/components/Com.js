import React from 'react';
import propTypes from 'prop-types'
// 希望Com中定义一个color的状态，希望把状态给title来用
// context，在当前组件下获取其他组件的上下文
// 1、在父级上要定义上下文，先要标明上下文的类型
// 2、在父级中获取子组件的上下文
class Com extends React.Component {
    static childContextTypes = {col : propTypes.string}
    getChildContext() {  // 这里返回的结果就是儿子的上下文
        return { col : this.state.color }
    }
    constructor(props) {
        super(props);
        this.state = {
            color : 'yellowgreen'
        }
    }
    render() {
        return (
            <div><Header/></div>
        )
    }
}
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div><Title/></div>)
    }
}
class Title extends React.Component {
    static contextTypes = {col : propTypes.string}
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div style={{ color : this.context.col }}>title</div>)
    }
}
export default Com;