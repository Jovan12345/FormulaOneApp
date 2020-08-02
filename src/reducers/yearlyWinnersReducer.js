export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_WINNERS':
            return action.payload;
        default:
            return state;
    }
};