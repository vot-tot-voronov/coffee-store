import React from 'react';

import { connect } from 'react-redux';

import CartListItem from '../cart-list-item';
import {coffeeAddedToCart,
        coffeeRemoveFromCart,
        allCoffeeRemoveFromCart} from '../../actions';

import './cart.scss';

const Cart = ({ cartItems, onIncrease, onDecrease, onDelete }) => {
    return (
        <div className="shopping-cart">
            <h2 className="shopping-cart__title">Корзина</h2>
            {
                cartItems.map(
                    item => {
                        return <CartListItem 
                                    key={item.id} 
                                    cartItem={item}
                                    onIncrease={() => onIncrease(item.id)}
                                    onDecrease={() => onDecrease(item.id)}
                                    onDelete={() => onDelete(item.id)}
                                />
                    }
                )
            }
            
        </div>
    );
};

const mapStateToProps = ({ cartItems }) => {
    return {
        cartItems
    }
};

const mapDispatchToProps = {
    onIncrease: coffeeAddedToCart,
    onDecrease: coffeeRemoveFromCart,
    onDelete: allCoffeeRemoveFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);