import React from 'react';

import './coffee-list-item.css'

const CoffeeListItem = ({ coffee }) => {
    const {img, name, cookMethod, weight, price} = coffee;
    return (
        <div className="coffee-list-item">
            <div className="cover-img">
                <img src={img} alt="Cover pic"/>
            </div>
            <p className="cook-method">{cookMethod}</p>
            <h1 className="coffee-name">{name}</h1>
            <p className="weight">{weight}</p>
            <p className="price">{price}</p>
        </div>
    );
}

export default CoffeeListItem;