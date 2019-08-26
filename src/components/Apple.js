import React from 'react';

class Apple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appleNum : 0,
            appPrice : 9,
            applePrice : 0
        }
    }
    render() {
        return (
            <div>
                <div className="apple">
                    <span> 🍎🍎🍎</span>
                    <p className="p">单价：{ this.state.applePrice }</p>
                    <p className="p">
                        <button>--</button>
                        <span> {this.state.appleNum} </span>
                        <button>++</button>
                    </p>
                    <p className="p">总价：{ this.state.applePrice }</p>
                </div>
            </div>
        )
    }
}

export default Apple;