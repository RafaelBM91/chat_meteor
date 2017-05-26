import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="card">
				<div className="card-content">
			    <div className="media">
			      <div className="media-left">
			        <figure className="image is-48x48">
			          <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image" />
			        </figure>
			      </div>
			      <div className="media-content">
			        <p className="title is-4">John Smith</p>
			        <p className="subtitle is-6">@</p>
			      </div>
			    </div>
			    <div className="content">
			      descripcion...
			      <br />
			    </div>
			  </div>
			</div>
		);
	}
}

export default Card;
