import React, { useLayoutEffect } from 'react';

import Spinner from '../spinner';

import { connect } from 'react-redux';
import { coffeeLoaded } from '../../actions';


import './coffee-list.scss';

import CoffeeListItem from '../coffee-list-item';
import withCoffeeService from '../hoc';

const CoffeeList = ({ coffee, fetchCoffee }) => {
    useLayoutEffect(() => {
        fetchCoffee();
    }, [fetchCoffee]);
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

const mapDispatchToProps = (dispatch, ownProps) => {
    const { coffeeService } = ownProps;

    return {
        fetchCoffee: () => {
            coffeeService.getCoffee()
            .then(data => dispatch(coffeeLoaded(data)));
        }
    }
}

export default withCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeList));