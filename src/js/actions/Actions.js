let nextTodoId = 0;

export default const addTodo = (text) => {
	return {
		type : 'ADD_TODO',
		id : nextTodoId++,
		text
	}
}