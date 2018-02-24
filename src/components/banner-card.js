import React from 'react';
import {connect} from 'react-redux';

import './banner-card.css';

export function BannerCard(props) {
	return (
		<h1>{props.header}</h1>
		<p>{props.description}</p>
	);
};