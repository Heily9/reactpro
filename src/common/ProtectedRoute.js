import React from 'react';
import {withRouter} from 'react-router-dom';
class PretectedRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        setTimeout(() => {
            let flag = localStorage.getItem('login');
            if(!flag) {
                this.props.history.push('/')
            }
        },1000)
    }
    render() {
        let { path, component: Component } = this.props;
        return (
            <div>
                <Component/>
            </div>
        )
    }
}

export default withRouter(PretectedRoute);