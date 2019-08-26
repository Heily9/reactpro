// initState  switch
import * as Types from './actionTypes'
import { combineReducers } from 'redux'

function counter(state={num : 100},action) {
    switch (action.type) {
        case Types.INCREATEMENT :
            return { num : state.num + action.count }
        case Types.DECREMENT :
            return { num : state.num - action.count }
        default :
            return state;
    }
}

function todo(state = {todos : []},action) {
    switch (action.type) {
        case Types.ADD_TODO :
            let { todos } = state;
            todos.push(action.text)
            return { ...state, todos: todos };
        default :
            return state;
    }
}

// 会产生呀i 个新的对象
let reducers = combineReducers({
    counter,todo
});
export default reducers;

