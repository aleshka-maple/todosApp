export function changeTodo(data) {
    return {
        type: 'CHANGE_TODO',
        payload: data
    }
}

export function addTodo(data) {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TODO',
            payload: data
        })

        dispatch({
            type: 'SAVE_DATA_LOCAL'
        })
    }
}

export function saveTodo(data) {
    return (dispatch) => {
        dispatch({
            type: 'SAVE_TODO',
            payload: data
        })

        dispatch({
            type: 'SAVE_DATA_LOCAL'
        })
    }
}

export function deleteTodo(index) {
    return (dispatch) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: index
        })

        dispatch({
            type: 'SAVE_DATA_LOCAL'
        })
    }
}

export function lockTodo(index) {
    return (dispatch) => {
        dispatch({
            type: 'LOCK_TODO',
            payload: index
        })

        dispatch({
            type: 'SAVE_DATA_LOCAL'
        })
    }
}

