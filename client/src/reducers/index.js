const initialState = {
    books: []
};
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'COFFEE_LOADED':
            return {
                books: action.payload
            }
        default:
            return state;
    }
};

export default reducer;