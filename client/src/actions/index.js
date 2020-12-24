const coffeeLoaded = (coffeeType) => {
    return {
        type: 'COFFEE_LOADED',
        payload: coffeeType
    };
};

export {
    coffeeLoaded
};