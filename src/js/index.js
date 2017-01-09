import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Todo from './reducers/Reducer'
import App from './components/App'
import { addTodo } from './actions/Actions'


let store = createStore(Todo); // reducerを呼び出す

store.dispatch(addTodo('Hello world!')) // この関数にactionを渡すことでacitonとstateをreducerに渡す
store.dispatch(addTodo('Hello Redux!'))
console.log(store.getState())  // => Object {id: 0, text: "Hello World!"}を返すはず 

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);