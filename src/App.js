import React from 'react';
import './App.css';
import Nav from './container/Nav'
// HashRouter 和 BrowerRouter 是路由的容器， 是组件 包在路由的外面
// route 是一条条的路径
// import {HashRouter as Router, Route} from 'react-router-dom'

// import Apple from './components/Apple'
// import Banana from './components/Banana'
// import Peer from './components/Peer'
// import Counter from './components/Counter'
// import Todo from './components/Todo'
// import Parent from './view/Parent'
// import Username from './components/Username'
// import Password from './components/Password'
// import Com from './components/Com'
// function Home() {
//   return <h1>首页</h1>
// }
// function Profile() {
//   return <h1>个人中心</h1>
// }
// function User() {
//   return <h1>用户</h1>
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (   
      // <Router>
      // <div>
      //   <div>
      //     {/* <Apple></Apple>
      //   <Banana></Banana>
      //   <Peer></Peer> */}
      //   {/* <div className="carBottom">
      //     <h3>商品数量：<span>0</span></h3> <h3>商品总计：<span>0</span></h3>
      //   </div> */}

      //   {/* <hr/>
      //   <Counter/>
      //   <hr/>
      //   <Parent/>
      //   <hr/>
      //   <Todo/>
      //   <hr/>
      //   <Username/>
      //   <Password/>
      //   <hr/>
      //   <Com/> */}
      //   </div>
      //   {/* 路径匹配时，会渲染对应的组件，路由是从上到下匹配的，开头匹配到就可以执行 */}
      //   <Route path="/" exact={true} component={Home}></Route>
      //   <Route path="/profile" component={Profile}></Route>
      //   <Route path="/user" component={User}></Route>
      // </div>
      // </Router> 
      <div>
        <Nav/>
        { this.props.children }
      </div>
    )
  }
}


export default App;
