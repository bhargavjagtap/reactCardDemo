import React from 'react'
import logo from './logo192.png';
import './navbar.css';

const Navbar = () => {
    return (
    <nav>
        <img src={logo} alt="logo" className="nav--icon" width="40px"/>
        <h3 className="nav--logo_text">React Facts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
    )
}

export default Navbar
