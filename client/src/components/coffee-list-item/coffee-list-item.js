import React from 'react';


import './coffee-list-item.scss';

const CoffeeListItem = ({ coffee, onAddedToCart }) => {
    const {img, series, name, cookMethod, weight, price} = coffee;
    return (
        <div className="col-1-of-3 coffee-list-item">
            <div className="cover-img">
                <img src={`http://localhost:5000/${img}`} alt="Cover pic"/>
            </div>
            <div className="description">
                <p className="description__cook-method">{cookMethod}</p>
                <p className="description__series">{series}</p>
                <h1 className="description__coffee-name">{name}</h1>
                <p className="description__weight">{weight} гр.</p>
                <p className="description__price">{price} руб.</p>
                <button className="btn" onClick={onAddedToCart}>Добавить в корзину</button>
            </div>
        </div>
    );
}

export default CoffeeListItem;