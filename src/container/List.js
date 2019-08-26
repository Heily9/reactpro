import React from 'react';
import {Link} from 'react-router-dom';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList : []
        }
    }
    componentDidMount() {
        let userList = JSON.parse(localStorage.getItem('userlist')) || []
        this.setState({userList : userList})
    }
    render() {
        let list = this.state.userList.map((item) => {
            return <li key={item.id}><span>用户名：</span>
            <Link to={
                {pathname : '/detail/' + item.id,state : item} // 只是去到那个路由可以取到这个状态，如果在那个页面刷新了状态就丢了
                }>{item.username}
            </Link></li>
        })
        return (
            <div>
               <ul>
                    { list }
               </ul>
            </div>
        )
    }
}

export default List;