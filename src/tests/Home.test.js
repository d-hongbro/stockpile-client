import React from 'react';
import {shallow, mount} from 'enzyme';

import Home from './pages/home';

describe('<Home />', () => {
	it('Renders without crashing', () => {
		shallow(<Home />);
	});
});