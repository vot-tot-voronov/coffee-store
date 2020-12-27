const initialState = {};
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'COFFEE_LOADED':
            return {
                coffee: action.payload
            }
        default:
            return state;
    }
};

export default reducer;