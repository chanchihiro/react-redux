import React from 'react'
import ReactDOM from 'react-dom'
import Provider from 'react-redux'
import Store from 'redux'
import Todo from './reducers/Reducer'
import App from './components/App'

let store = Store(Todo);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);