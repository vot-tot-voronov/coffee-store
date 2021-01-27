const initialState = {
    coffee: [],
    cartItems: []
};

const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
      return [
        ...cartItems.slice(0, idx),
        ...cartItems.slice(idx + 1)
      ];
    }
  
    if (idx === -1) {
      return [
        ...cartItems,
        item
      ];
    }
  
    return [
      ...cartItems.slice(0, idx),
      item,
      ...cartItems.slice(idx + 1)
    ];
  };

const updateCartItem = (coffee, item={}, quantity) => {
    const {
        id = coffee.id,
        img = coffee.img,
        name = coffee.name,
        price = coffee.price,
        count = 0
    } = item;
    return {
        id,
        img,
        name,
        price,
        count: count + quantity
    }
};

const updateOrder = (state, coffeeId, quantity) => {
    const {coffee, cartItems} = state;

    const coffeeItem = coffee.find(({id}) => id === coffeeId);
    const itemIndex = cartItems.findIndex(({ id }) => id === coffeeId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(coffeeItem, item, quantity);

    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }
}

const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'COFFEE_LOADED':
            return {
                ...state,
                coffee: [
                    ...action.payload
                ]
            }
        case 'COFFEE_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'COFFEE_REMOVE_FROM_CART':
            return updateOrder(state, action.payload, -1);
        case 'ALL_COFFEE_REMOVE_FROM_CART':
            const item = state.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count)


        default:
            return state;
    }
};

export default reducer;