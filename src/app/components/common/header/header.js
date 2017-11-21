import './header.css';

import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


const Header= (props) => {
    return (
    <header className='app-comp--header'>
        <nav className={props.className} >
            <NavLink exact to='/'>
                Home
            </NavLink>
            <NavLink to='/realty-map'>
                Real estate map
            </NavLink>
            <NavLink to='/about'>
                About us
            </NavLink>
        </nav>
    </header>
)};
Header.defaultProps= () => {
    return {className: ''};
}

export default Header;
