import React from 'react';
// import {connect} from 'react-redux';

import './halfpage-image.css';

export default function HalfpageImage(props) {
	return (
		<a href={props.imageLink}>
			<img src={props.src} alt="feature image displayed" />
		</a>
	);
};