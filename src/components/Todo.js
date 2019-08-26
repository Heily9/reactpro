import React from 'react';
import store from '../store'
import * as action from '../store/action'
export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : store.getState().todo.todos
        }
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({todos : store.getState().todo.todos})
        })
    }
    componentUnmount() {
        this.unsubscribe()
    }
    render() {
        console.log(this.state.todos)
        return (
            <div>
                <input type="text" onKeyUp={(e) => {
                    console.log(this.state.todos)
                    if(e.keyCode === 13) {
                        store.dispatch(action.todo(e.target.value));
                        e.target.value = ''
                    }
                }}/>
                {this.state.todos.map((item,index) => {
                    return <li key={index}>{index} ---- {item}</li>
                })}
            </div>
        )
    }
}