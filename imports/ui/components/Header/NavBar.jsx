import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

class NavBar extends Component {
	render() {
		return (
			<nav className="nav has-shadow is-primary">
			  <div className="container">
			    <div className="nav-left">
			    	<a className="nav-item">BMChat</a>
			    </div>
			    <div className="nav-center">
				    <a className="nav-item">
				      <span className="icon">
				        <i className="fa fa-twitter"></i>
				      </span>
				    </a>
				  </div>
				  <div className="nav-right nav-menu">
				    <a className="nav-item">Home</a>
				  </div>
			  </div>
			</nav>
		);
	}
}

export default NavBar;
