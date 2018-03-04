import React from 'react';
// import {connect} from 'react-redux';

import './halfpage-image.css';

export default function HalfpageImage(props) {
	return (
		<div className="image col-8">
			<a href={props.imageLink}>
				<img src={props.src} alt="feature displayed" />
			</a>
		</div>
	);
};