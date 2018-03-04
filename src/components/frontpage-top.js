import React from 'react';
// import {connect} from 'react-redux';

import BannerCard from './banner-card';

import './frontpage-top.css';

export default function FrontpageTop(props) {
	return (
		<header className="indexHeader">
		<BannerCard header="Stockpile" description="Stock tracking app" />
		</header>
	);
};