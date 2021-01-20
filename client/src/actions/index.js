const coffeeLoaded = (coffee) => {
    return {
        type: 'COFFEE_LOADED',
        payload: coffee
    };
};

export {
    coffeeLoaded
};