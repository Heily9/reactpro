import React from 'react';
// import store from '../store'
// import * as Types from '../store/actionTypes'
import { connect } from 'react-redux'
import * as action from '../store/action'
// 利用react-redux需要导出一个连接以后的组件
 class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // num : store.getState().counter.num
        }
    }
    // componentDidMount() {
    //    this.unsubscribe = store.subscribe(() => {
    //         this.setState({ num : store.getState().counter.num })
    //     })
    // }
    // componentWillUnmount() {
    //     this.unsubscribe()
    // }
    render() {
        return (
            <div>
                <button onClick={()=> {
                    // store.dispatch(action.add(12))
                }}>-</button>
                { this.props.n1 }
                <button onClick={() => {
                    this.props.add(1)
                    // store.dispatch({ type : Types.INCREATEMENT,count : 10 })
                }}>+</button>
            </div>
        )
    }
}
// connect 执行时有两个函数，mapStateToProps
// 1、将redux中的状态映射成属性
// 2、mapDispatchToProps,将dispatch方法映射成属性
// 3、这两个组件的返回值会作为当前组件的属性
let mapStateToProps = (state) => {  // 这个函数的参数是state
    return {n1 : state.counter.num}
}
let mapDispatchToProps = (dispatch)=> {  // 这个函数的参数是dispatch
    return {
        add: (count) => {
            dispatch(action.add(count))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter) // 第二次执行的参数是当前组件