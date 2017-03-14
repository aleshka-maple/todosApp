const initialState = {
    id: null,
    title: '',
    text: ''
}

export default function todoEdit(state = initialState, action) {
    let data = action.payload;

    switch (action.type) {
        case 'CHANGE_TODO':
            return data
        case 'ADD_TODO':
        case 'SAVE_TODO':
            return initialState
        default:
            return state;
    }

}