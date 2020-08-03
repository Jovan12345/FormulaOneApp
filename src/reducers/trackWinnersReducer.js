export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TRACK_WINNERS':
            return action.payload;
        case 'CLEAR_TRACK_WINNERS':
            return [];    
        default:
            return state;
    }
};