import React, { useLayoutEffect } from 'react';

import Spinner from '../spinner';

import { connect } from 'react-redux';
import * as actions from '../../actions';


import './coffee-list.scss';

import CoffeeListItem from '../coffee-list-item';
import withCoffeeService from '../hoc';

const CoffeeList = ({ coffee, coffeeService, coffeeLoaded }) => {
    useLayoutEffect(() => {
        coffeeService.getCoffee()
            .then(data => coffeeLoaded(data));
    }, [coffeeService, coffeeLoaded]);
    if (coffee === undefined) {
        return <Spinner />
    } else {
        return (
            <div className="row coffee-list">
                {
                    coffee.map((item) => {
                        return (
                          <CoffeeListItem key={item.id} coffee={item} /> 
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

export default withCoffeeService()(connect(mapStateToProps, actions)(CoffeeList));