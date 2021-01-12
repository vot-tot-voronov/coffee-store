import React from 'react';

import './coffee-list.css';

import CoffeeListItem from '../coffee-list-item';
import withCoffeeService from '../hoc';

const CoffeeList = ( {coffeeService} ) => {
    const coffeeListData = coffeeService.getCoffee();
    console.log(coffeeListData);
    return (
        <ul className="coffee-list">
            {
                coffeeListData.map((coffee) => {
                    return (
                        <li key={coffee.id}>
                            <CoffeeListItem  coffee={coffee} />
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default withCoffeeService()(CoffeeList);