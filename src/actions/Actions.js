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

export function deleteTodo(id) {
    return (dispatch) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })

        dispatch({
            type: 'SAVE_DATA_LOCAL'
        })
    }
}

