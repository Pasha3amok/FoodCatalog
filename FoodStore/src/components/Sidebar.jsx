import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: '/',
            name: 'Home',
            icon: <i className="material-icons">home</i>,
        },
        {
            path: '/About',
            name: 'About',
            icon: <i className="material-icons">face </i>,
        },
    ];

    return (
        <div className="navbar-fixed">
            <div
                style={{ width: isOpen ? '300px' : '50px' }}
                className="sidebar"
            >
                <div className="top_section">
                    <h5 style={{ display: isOpen ? 'block' : 'none' }}>Menu</h5>
                </div>
                <div className="bars">
                    <i onClick={toggle} className="material-icons menu">
                        menu
                    </i>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className="link"
                        activeclassName="active"
                    >
                        <div className="icon">{item.icon}</div>
                        <div
                            className="link_text"
                            style={{ display: isOpen ? 'block' : 'none' }}
                        >
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
