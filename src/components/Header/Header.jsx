import React from 'react'
import myimg from './logo192.png'
import './header.css'   
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <>
        <Navbar/>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </>
    )
}

export default Header
