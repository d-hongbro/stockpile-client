import React from 'react';
// import {connect} from 'react-redux';

import './banner-card.css';

export default function BannerCard(props) {
	return (
		<div className="container row">
			<h1 className="title">{props.header}</h1>
			<span className="subTitle">{props.description}</span>
		</div>
	);
};