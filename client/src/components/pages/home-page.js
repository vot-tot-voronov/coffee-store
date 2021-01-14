import React from 'react';

import Header from '../header';
import CoffeeList from '../coffee-list';

const HomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <CoffeeList />
        </React.Fragment>
    );
};


export default HomePage;