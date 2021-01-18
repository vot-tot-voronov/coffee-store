import React from 'react';

import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="row">
                <div className="col-1-of-2">
                    <Link to='/'><h1 className="title">Coffee Store</h1></Link>
                </div>
                <div className="col-1-of-2">
                    <div className="nav-box" role="search">
                        <i className="fas fa-search"></i>
                        <i className="fab fa-gratipay"></i>
                        <Link to='/cart'><i className="fas fa-cart-arrow-down"></i></Link>
                    </div>
                </div>
            </div>
            
            <nav className="nav" role="navigation">
                <ul className="topmenu">
                    <li><a href="/#">Главная</a></li>
                    <li><a href="/#" className="submenu-link">Кофе</a>
                        <ul className="submenu">
                            <li><a href="/#">Mikale</a></li>
                            <li><a href="/#">Pauling</a></li>
                            <li><a href="/#">Lavazza</a></li>
                        </ul>
                    </li>
                    <li><a href="/#" className="submenu-link">Чай</a>
                        <ul className="submenu">
                            <li><a href="/#">Bigelow</a></li>
                            <li><a href="/#">Lipton</a></li>
                            <li><a href="/#">Dilmah</a></li>
                        </ul>
                    </li>
                    <li><a href="/#">Доставка</a></li>
                    <li><a href="/#">Контакты</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;