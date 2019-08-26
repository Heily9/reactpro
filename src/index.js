import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router , Route,Switch,Redirect } from 'react-router-dom'
import User from './container/User'
import Home from './container/Home'
import Profile from './container/Profile'
import Detail from './container/Detail'
import ProtectRoute from './common/ProtectedRoute'
// react-redux 提供了一个provider组件,这里需要将store传入
import { Provider } from 'react-redux'
import store from './store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './css/index.css'
if(module.hot) {
    module.hot.accept()
}

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/profile" component={Profile}/>
                {/* 有权限才可以访问uesr，模拟如果localstorage有login登陆了，没有不让访问，跳转到首页
                    官方文档上面的写法不支持异步
                */}
                <ProtectRoute path="/user" component={User}/>
                {/* 进入详情页需要一个id ,this.props.match.params = { id:1 }*/}
                <Route path='/detail/:id' component={Detail}/>
                <Redirect to="/"/>
            </Switch>
        </App>
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
