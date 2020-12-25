const initialState = {
    coffee: [
        {
            id: 1,
            name: "Lalibella",
            country: "Peru",
            price: 320
        }
    ]
};
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