import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers/index'
import App from './components/App'
import { addTodo, toggleTodo } from './actions/Actions'


let store = createStore(todo); // reducerを呼び出す

store.dispatch(addTodo('Hello world!')) // この関数にactionを渡すことでacitonとstateをreducerに渡す
store.dispatch(addTodo('Hello Redux!'))
store.dispatch(addTodo('ちょっと理解してきた'))
store.dispatch(toggleTodo(0))

console.log(store.getState()) 

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);