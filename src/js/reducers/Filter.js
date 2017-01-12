
const visualFilter = (state = 'show_all', action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER' :
			return action.filter
		default :
			return state
	}
}

export default visualFilter