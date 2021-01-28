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
                    <li><p href="/#">Главная</p></li>
                    <li><p href="/#" className="submenu-link">Кофе</p>
                        <ul className="submenu">
                            <li><p href="/#">Mikale</p></li>
                            <li><p href="/#">Pauling</p></li>
                            <li><p href="/#">Lavazza</p></li>
                        </ul>
                    </li>
                    <li><p href="/#" className="submenu-link">Чай</p>
                        <ul className="submenu">
                            <li><p href="/#">Bigelow</p></li>
                            <li><p href="/#">Lipton</p></li>
                            <li><p href="/#">Dilmah</p></li>
                        </ul>
                    </li>
                    <li><p href="/#">Доставка</p></li>
                    <li><p href="/#">Контакты</p></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;