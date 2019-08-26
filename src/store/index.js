// 创建仓库
import { createStore,applyMiddleware } from 'redux'
import reducerLogger from 'redux-logger'
// 可以帮我们应用中间件
import reducer from './reducer';


// 创建一个store
const store =  createStore(reducer,applyMiddleware(reducerLogger))
export default store;

