import React from 'react';
import {connect} from 'react-redux';

import HalfpageInfo from './halfpage-info';
import HalfpageImage from './halfpage-image';

import './frontpage-section.css';

export default function FrontpageSection(props) {
	return (
		<div>
		<HalfpageInfo title={props.title} message={props.message} />
		<HalfpageImage imageLink={props.imageLink} src={props.src} />
		</div>
	);
};