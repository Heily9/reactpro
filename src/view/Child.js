import React from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childVal : 'childVal',
            childNum : 0
        }
    }
    render() {
        // const {parentAdd} = this.props
        return (
            <div>
                <span>{ this.state.childVal } ----  { this.props.parentNum }</span>
                <button onClick={()=>{this.props.parentAdd('a')}}>childadd</button>
            </div>
        )
    }
}

export default Child;