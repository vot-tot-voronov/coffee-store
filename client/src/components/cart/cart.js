import React from 'react';

import CartListItem from '../cart-list-item';

import './cart.scss';

const Cart = () => {
    return (
        <div className="shopping-cart">
            <CartListItem />
        </div>
    );
};

export default Cart;