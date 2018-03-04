import React from 'react';
// import {Provider} from 'react-redux';

import TopNav from '.././components/top-nav';
import FrontpageTop from '.././components/frontpage-top';
import FrontpageSection from '.././components/frontpage-section';
import FrontpageSectionReverse from '.././components/frontpage-section-reverse';
import Footer from '.././components/footer';

import './home.css';

export default function Home(props) {
	return (
		<main>
			<TopNav />
			<FrontpageTop />
			<div className="container row sectionContainer">
				<FrontpageSection 
					title="Track your favorite stocks" 
					message=""
					href="#"
					src="http://via.placeholder.com/700x500"
				/>
				<FrontpageSectionReverse
					title="Compare your stocks with Indexes" 
					message=""
					href="#"
					src="http://via.placeholder.com/700x500"
				/>
			</div>
			<Footer />
		</main>
	);
};