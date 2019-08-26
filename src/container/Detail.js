import React from 'react';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let user = this.props.location.state;
        if(user == null) {  // 如果没有的话就去localstorage里面去取
             let id = this.props.match.params.id;
             user =  JSON.parse(localStorage.getItem('userList')) || [];
             user = user.find(item => item.id == id)
        }
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}

export default Detail;