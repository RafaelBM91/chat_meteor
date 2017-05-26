import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import Card from '../components/Body/Card/Card.jsx';
import CardIn from '../components/Body/Card/CardIn.jsx';

class Body extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sesion: false,
			name: '',
			desc: '',
		};
	}
	render() {
		let {sesion, name, desc} = this.state;
		return (
			<div className="columns is-muliline is-centered">
				<div className="column is-3">
					{
						(sesion) ?
							<Card name="rafa" desc="holaaaaa" />
						:
							<CardIn />
					}
				</div>
				<div className="column is-6">hola</div>
				<div className="column is-3">hola</div>
			</div>
		);
	}
}

export default Body;
