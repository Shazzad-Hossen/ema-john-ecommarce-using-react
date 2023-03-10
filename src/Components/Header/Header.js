import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div className="">
                <a href="/order">Order</a>
                <a href="/order">Order Review</a>
                <a href="/order">Manage Inventory</a>
                <a href="/order">Sign In</a>
            </div>
            
        </nav>
    );
};

export default Header;