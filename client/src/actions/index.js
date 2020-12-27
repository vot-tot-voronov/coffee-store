const coffeeLoaded = (coffee) => {
    return {
        type: 'COFFEE_LOADED',
        payload: fetch('http://localhost:3001/').then(res => console.log(res.json()))
    };
};

export {
    coffeeLoaded
};