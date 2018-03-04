import React from 'react';
// import {connect} from 'react-redux';

import HalfpageInfo from './halfpage-info';
import HalfpageImage from './halfpage-image';

import './frontpage-section-reverse.css';

export default function FrontpageSectionReverse(props) {
	return (
		<section className="section">
			<HalfpageImage imageLink={props.imageLink} src={props.src} />
			<HalfpageInfo title={props.title} message={props.message} />
		</section>
	);
};