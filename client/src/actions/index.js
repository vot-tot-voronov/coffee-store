const coffeeLoaded = (coffee) => {
    return {
        type: 'COFFEE_LOADED',
        payload: coffee
    };
};
const coffeeAddedToCart = (coffeeId) => {
    return {
        type: 'COFFEE_ADDED_TO_CART',
        payload: coffeeId
    }
}
const coffeeRemoveFromCart = (coffeeId) => {
    return {
        type: 'COFFEE_REMOVE_FROM_CART',
        payload: coffeeId
    }
}
const allCoffeeRemoveFromCart = (coffeeId) => {
    return {
        type: 'ALL_COFFEE_REMOVE_FROM_CART',
        payload: coffeeId
    }
}

export {
    coffeeLoaded,
    coffeeAddedToCart,
    coffeeRemoveFromCart,
    allCoffeeRemoveFromCart
};