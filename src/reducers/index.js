import { combineReducers } from 'redux'
import todoEdit from './todoEdit'
import todoList from './todoList'

export default combineReducers({
    todoEdit,
    todoList
})