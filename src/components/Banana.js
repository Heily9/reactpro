import React from 'react';

class Banana extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bananaNum : 0,
            bananaPrice : 7,
            bananaAll : 0
        }
    }
    render() {
        return (
            <div>
                <div className="banana">
                    <span>🍌🍌🍌</span>
                    <p className="p">单价：{ this.state.bananaPrice }</p>
                    <p className="p">
                        <button>--</button>
                        <span> {this.state.bananaNum} </span>
                        <button>++</button>
                    </p>
                    <p className="p">总价：{ this.state.bananaAll }</p>
                </div>
            </div>
        )
    }
}

export default Banana;