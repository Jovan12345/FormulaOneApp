export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TRACK_WINNERS':
            return action.payload;
        default:
            return state;
    }
};