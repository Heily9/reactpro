import React from 'react';
import '../css/index.css'
import Add from './Add'
import List from './List'
import { Link, Route,NavLink } from 'react-router-dom'
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='left'>
                    <div><NavLink to={'/user/add'}>添加用户</NavLink></div>
                    <div><NavLink to={'/user/list'}>用户列表</NavLink></div>
                </div>
                <div className='right'>
                    <Route path='/user' component={Add} exact={true}/>
                    <Route path='/user/add' component={Add}/>
                    <Route path='/user/list' component={List}/>
                </div>
            </div>
        )
    }
}

export default User;