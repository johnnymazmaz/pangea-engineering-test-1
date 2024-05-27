import React from 'react';

const Menu = ({ options }) => {
    return (
        <nav className="menu">
            <ul className="menu-list">
                {options.map((option, index) => {
                    let link;
                    if (option === 'Home') {
                        link = 'https://blitzpay.pro/home';
                    } else {
                        link = `#${option.toLowerCase()}`;
                    }
                    const isExternal = link.startsWith('http');
                    return (
                        <li key={index}>
                            {isExternal ? (
                                <a href={link} target="_blank" rel="noopener noreferrer">{option}</a>
                            ) : (
                                <a href={link}>{option}</a>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Menu;
