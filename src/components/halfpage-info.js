import React from 'react';
import {connect} from 'react-redux';

import './halfpage-info.css';

export function HalfpageInfo(props) {
	return (
		<h2>{props.title}</h2>
		<p>{props.message}</p>
	);
};