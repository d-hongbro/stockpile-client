import React from 'react';
import {Provider} from 'react-redux';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a href="#what" className="what" aria-label="How to play">
                        What?
                    </a>
                </li>
            </ul>
        </nav>
    );
};