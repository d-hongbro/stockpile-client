import React from 'react';
// import {Provider} from 'react-redux';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav className="topNav">
            <div className="container row">
                <ul className="clearfix">
                    <li><a href="#home" className="nav-link">Home</a></li>
                    <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
                    <li><a href="#search" className="nav-link">Search Stocks</a></li>
                    <li><a href="#sp" className="nav-link">S&P 500</a></li>
                    <li><a href="#login" className="nav-link">Login</a></li>
                    <li><a href="#signup" className="nav-link">Sign Up</a></li>
                    <li><a href="#logout" className="nav-link">Logout</a></li>
                </ul>
            </div>
        </nav>
    );
};