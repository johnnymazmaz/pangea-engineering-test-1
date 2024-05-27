import React from 'react';
import blogo from './blogo.png';
import Menu from './Menu';

const Header = () => {
    return (
        <div className="blitz-header">
            <div className="menu-left">
                <Menu options={['Home', 'About']} />
            </div>
            <img src={blogo} alt="Logo" className="blogo" />
            <div className="menu-right">
                <Menu options={['Services', 'Contact']} />
            </div>
            <div className="menu-login">
                <Menu options={['Login']} />
            </div>
        </div>
    );
};

export default Header;
