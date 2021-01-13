import React from 'react';

import './coffee-list.scss';

import CoffeeListItem from '../coffee-list-item';
import withCoffeeService from '../hoc';

const CoffeeList = ( {coffeeService} ) => {
    const coffeeListData = coffeeService.getCoffee();
    console.log(coffeeListData);
    return (
        <div className="row coffee-list">
            {
                coffeeListData.map((coffee) => {
                    return (
                      <CoffeeListItem key={coffee.id} coffee={coffee} /> 
                    );
                })
            }
        </div>
    )
}

export default withCoffeeService()(CoffeeList);