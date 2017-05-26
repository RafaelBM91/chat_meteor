import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import NavBar from '../components/Header/NavBar.jsx';

class Header extends Component {
	render() {
		return (
			<NavBar />
		);
	}
}

export default Header;
