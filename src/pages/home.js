import React from 'react';
import {connect} from 'react-redux';

import FrontpageTop from './components/frontpage-top';
import FrontpageSection from './components/frontpage-section';
import Footer from './components/footer';

import './home.css';

export function Home(props) {
	return (
		<FrontpageTop />
		<FrontpageSection 
			title="Track your favorite stocks" 
			message=""
			href="#"
			src="#"
		/>
		<FrontpageSection 
			title="Compare your stocks with Indexes" 
			message=""
			href="#"
			src="#"
		/>
		<Footer />
	);
};