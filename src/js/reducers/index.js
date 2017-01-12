import { combineReducers } from 'redux'
import todos from './Reducer'
import filter from './Filter'

const todo = combineReducers({ 
	todos,
	filter
})
export default todo