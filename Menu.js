import React from 'react';

const Menu = ({ options }) => {
    return (
        <nav className="menu">
            <ul className="menu-list">
                {options.map((option, index) => (
                    <li key={index}><a href={`#${option.toLowerCase()}`}>{option}</a></li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
