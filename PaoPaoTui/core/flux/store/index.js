import { combineReducers } from 'redux'
import todos from '../reducers/todo'

const todoApp = combineReducers({
  todos,
})

export default todoApp
