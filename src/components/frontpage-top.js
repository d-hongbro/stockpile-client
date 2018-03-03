import React from 'react';
// import {connect} from 'react-redux';

import TopNav from './top-nav';
import BannerCard from './banner-card';

import './frontpage-top.css';

export default function FrontpageTop(props) {
	return (
		<div>
		<TopNav />
		<BannerCard header="Stockpile" description="Stock tracking app" />
		</div>
	);
};