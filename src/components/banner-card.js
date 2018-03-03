import React from 'react';
import {connect} from 'react-redux';

import './banner-card.css';

export default function BannerCard(props) {
	return (
		<div>
		<h1>{props.header}</h1>
		<p>{props.description}</p>
		</div>
	);
};