import React, { useLayoutEffect } from 'react';

import Spinner from '../spinner';

import { connect } from 'react-redux';
import { coffeeLoaded, coffeeAddedToCart } from '../../actions';


import './coffee-list.scss';

import CoffeeListItem from '../coffee-list-item';
import withCoffeeService from '../hoc';

const CoffeeList = ({ coffee, fetchCoffee, onAddedToCart }) => {
    useLayoutEffect(() => {
        fetchCoffee();
    }, [fetchCoffee]);
    if (coffee === undefined) {
        <Spinner />
    } else {
        return (
            <div className="row coffee-list">
                {
                    coffee.map((item) => {
                        return (
                          <CoffeeListItem 
                          key={item.id} coffee={item} 
                          onAddedToCart={() => {
                              onAddedToCart(item.id)
                          }} /> 
                        );
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = ({ coffee }) => {
    return {
        coffee
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { coffeeService } = ownProps;

    return {
        fetchCoffee: () => {
            coffeeService.getCoffee()
            .then(data => dispatch(coffeeLoaded(data)));
        },
        onAddedToCart: (id) => dispatch(coffeeAddedToCart(id))
    }
}

export default withCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeList));