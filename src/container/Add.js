import React from 'react';
import '../css/index.css'
class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val : ''
        }
    }
    add = () => {
        if(this.state.val != '') {
            let userList = JSON.parse(localStorage.getItem('userlist')) || [];
            userList.push({id : Math.random(), username : this.state.val});
            localStorage.setItem('userlist',JSON.stringify(userList));
            this.setState({val : ''});
            // 所以通过路由渲染出来的组件，组件属性都会多具有三个属性 history match location
            this.props.history.push('/user/list');
        }     
    }
    inputVal = (e) => {
        this.setState({val : e.target.value})
    }
    render() {
        return (
            <div>
                <input type="text" className='input' onChange={this.inputVal}/>
                <button onClick={this.add} className='btn'>添加</button>
            </div>
        )
    }
}

export default Add;