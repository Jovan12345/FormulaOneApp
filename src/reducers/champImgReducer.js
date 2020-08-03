export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CHAMP_IMG':
            return action.payload;
        default:
            return state;
    }
};