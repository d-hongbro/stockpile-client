import React from 'react';
import {connect} from 'react-redux';

import './footer.css';

export function Footer(props) {
	return (
		<nav>
			<ul>
				<li>
					<a href="#">Made by David Hong </a>
				</li>
			</ul>
		</nav>
	);
};