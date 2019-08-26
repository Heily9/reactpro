import React from 'react';
import Child from './Child';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parentVal : 'the date of parent',
            parentNum : 0
        }
    }
    parentAdd = (c)=> {
        console.log(c)
        let { parentNum } = this.state;
        parentNum++;
        // this.setState({parentNum},() => {
        //     console.log(this.state.parentNum)
        // })
        this.setState({...this.state,parentNum})
    }
    render() {
        return (
            <div>
                <span>{ this.state.parentVal }</span>
                {/* <span>{ this.state.parentNum }</span> */}
                {/* <button onClick={this.parentAdd}> +click+ </button> */}
                <Child parentNum={this.state.parentNum} parentAdd={this.parentAdd}/>
            </div>
        )
    }
}

export default Parent;