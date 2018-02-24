import React from 'react';
import {connect} from 'react-redux';

import './halfpage-image.css';

export function HalfpageImage(props) {
	return (
		<a href={props.imageLink}>
			<img src={props.src} />
		</a>
	);
};