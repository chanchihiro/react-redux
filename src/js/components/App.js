import React from 'react'
import VisibleTodolist from '../containers/VisibleTodolist'

export default class App extends React.Component {
	render(){
		return(
			<div>
				<VisibleTodolist />
			</div>
		);
	}
}