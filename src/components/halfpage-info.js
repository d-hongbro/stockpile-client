import React from 'react';
// import {connect} from 'react-redux';

import './halfpage-info.css';

export default function HalfpageInfo(props) {
	return (
		<div className="info col-4">
			<h2>{props.title}</h2>
			<p>{props.message}</p>
		</div>
	);
};