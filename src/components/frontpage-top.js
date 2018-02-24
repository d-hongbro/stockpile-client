import React from 'react';
import {connect} from 'react-redux';

import TopNav from './top-nav';
import BannerCard from './banner-card';

import './frontpage-top.css';

export function FrontpageTop(props) {
	return (
		<TopNav />
		<BannerCard header="Stockpile" description="Stock tracking app" />
	);
};