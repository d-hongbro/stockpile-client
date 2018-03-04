import React from 'react';
// import {Provider} from 'react-redux';
import TopNav from '.././components/top-nav';
import StockChart from '.././components/stock-chart';
import Footer from '.././components/footer';
import './portfolio.css';

export default function Home(props) {
	return (
		<main>
			<TopNav />
			<div className="container row sectionContainer">
				<StockChart />
			</div>
			<Footer />
		</main>
	);
};