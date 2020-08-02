export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CHAMP':
            return action.payload;
        default:
            return state;
    }
};