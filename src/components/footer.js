import React from 'react';
// import {connect} from 'react-redux';

import './footer.css';

export default function Footer(props) {
	return (
		<footer>
			<nav className="botNav">
				<div className="container row">
					<ul>
						<li>
							<a href="https://github.com/d-hongbro">Made by David Hong </a>
						</li>
					</ul>
				</div>
			</nav>
		</footer>
	);
};