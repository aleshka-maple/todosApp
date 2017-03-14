'use strict';
const initialState = localStorage['todosAppData'] ? JSON.parse(localStorage['todosAppData']) : []
import findIndex from 'lodash/findIndex'

export default function todoList(state = initialState, action) {
    let data = action.payload
    let newState

    switch (action.type) {
        case 'ADD_TODO':
            var maxId = state.length ? Math.max.apply(null, state.map( item => item.id)) : 0
            data.id = ++maxId
            return [...state, data]
        case 'DELETE_TODO':
            newState = [...state]
            newState.splice(data,1)
            return newState
        case 'SAVE_TODO':
            newState = [...state]
            newState[findIndex(state, { 'id': data.id})] = data
            return newState
        case 'SAVE_DATA_LOCAL':
            localStorage['todosAppData'] = JSON.stringify(state)
            return state
        case 'LOCK_TODO':
            newState = [...state]
            newState[data].locked = !newState[data].locked
            return newState
        default:
            return state
    }

}