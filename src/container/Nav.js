import React from 'react';
import { Link,withRouter } from 'react-router-dom'

// withRouter 是一个高阶组件
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='nav'>
                <span><Link to='/'>首页</Link></span>
                <span><Link to='/profile'>个人中心</Link></span>
                <span><Link to='/user'>用户</Link></span>
                </div>
            </div>
        )
    }
}
// withRouter 会把当前组件 包装成一个router组件
// 这样就可以使用 this.props.history.push方法了
export default withRouter(Nav);