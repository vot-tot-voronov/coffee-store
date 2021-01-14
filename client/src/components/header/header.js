import React from 'react';

import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="row">
                <div className="col-1-of-2">
                    <h1 className="title">Coffee Store</h1>
                </div>
                <div className="col-1-of-2">
                    <div className="nav-box">
                        <i className="fas fa-search"></i>
                        <i className="fab fa-gratipay"></i>
                        <i className="fas fa-cart-arrow-down"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;