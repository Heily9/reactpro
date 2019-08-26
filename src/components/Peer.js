import React from 'react';

class Peer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peerNum : 0,
            peerPrice : 8,
            peerAll : 0
        }
    }
    render() {
        return (
            <div>
                <div className="peer">
                    <span>🍐🍐🍐</span>
                    <p className="p">单价：{ this.state.peerPrice }</p>
                    <p className="p">
                        <button>--</button>
                        <span> {this.state.peerNum} </span>
                        <button>++</button>
                    </p>
                    <p className="p">总价：{ this.state.peerAll }</p>
                </div>
            </div>
        )
    }
}

export default Peer;