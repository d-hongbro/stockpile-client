import React from 'react';
import {connect} from 'react-redux';

import TopNav from './components/top-nav';

import Footer from './components/footer';

import './home.css';

export function Home(props) {
	return (
		<div>
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
		</div>
	);
};