import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import '../../stylesheets/bulma.less'

import Body from '../../layouts/Body.jsx';
import Header from '../../layouts/Header.jsx';

class Home extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<br />
				<Body />
			</div>
		);
	}
}

export default Home;
