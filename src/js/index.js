import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Todo from './reducers/Reducer'
import App from './components/App'
import { addTodo } from './actions/Actions'

let store = createStore(Todo);


store.dispatch(addTodo('Hello world!'))
console.log(store.getState())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);