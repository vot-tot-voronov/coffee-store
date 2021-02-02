import React from 'react';

import './cart-list-item.scss';

const CartListItem = ({cartItem, onIncrease, onDecrease, onDelete}) => {
    const {img, name, price, count} = cartItem;
    return (
        <div className="row cart-item">
            <div className="col-1-of-6">
                <div className="cart-item__img">
                    <img src={`http://localhost:5000/${img}`} alt="Cart item pic"/>
                </div>
            </div>
            <div className="col-1-of-6">
                <h3 className="cart-item__title cart-item--line-height">{name}</h3>
            </div>
            <div className="col-1-of-6">
                <p className="cart-item__price cart-item--line-height">Цена: {price}</p>
            </div>
            <div className="col-1-of-6">
                <div className="cart-item__manage">
                    <button onClick={onDecrease} className="btn btn--manage cart-item__manage--remove">-</button>
                    <div className="cart-item__manage--counter">{count}</div>
                    <button onClick={onIncrease} className="btn btn--manage cart-item__manage--add">+</button>
                </div>
            </div>
            <div className="col-1-of-6">
                <p className="cart-item__total cart-item--line-height">Итого: {count * price}</p>
            </div>
            <div className="col-1-of-6">
                <button onClick={onDelete} className="btn btn--remove cart-item__remove-item">X</button>
            </div>
        </div>
    );
}

export default CartListItem;