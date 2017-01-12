import { combineReducers } from 'redux'
import todos from './Reducer'

const todo = combineReducers({ todos })
export default todo