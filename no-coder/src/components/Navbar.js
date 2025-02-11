import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>  
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/matchingpage">AImatching</Link></li>
                <li><Link to="/message">Messages</Link></li>
                <li><Link to="account">Account</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contactt</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
