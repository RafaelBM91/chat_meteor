import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

class CardIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			url: '',
			urlLoad: 0,
			desc: '',
			desclen: 0,
		};
		this._handleTextName = this._handleTextName.bind(this);
		this._handleTextUrl = this._handleTextUrl.bind(this);
		this._handleTextDesc = this._handleTextDesc.bind(this);
		this._handleImageLoaded = this._handleImageLoaded.bind(this);
		this._handleImageError = this._handleImageError.bind(this);
	}
	_handleTextName(e) {
		let name = e.target.value;
		this.setState({ name });
	}
	_handleTextUrl(e) {
		let url = e.target.value;
		let urlLoad = 1;
		this.setState({ url, urlLoad });
	}
	_handleTextDesc(e) {
		let desc = e.target.value;
		let desclen = e.target.value.length;
		this.setState({ desc, desclen });
	}
	_handleImageLoaded(e) {
		let urlLoad = 2;
		console.log('si load');
		this.setState({ urlLoad });
	}
	_handleImageError(e) {
		let urlLoad = -1;
		console.log('no load');
		this.setState({ urlLoad });
	}
	render() {
		let { desclen, url, urlLoad } = this.state;
		return (
			<div className="card">
				<div className="card-content">
			    <div className="media">
			      <div className="media-left">
			        <figure className="image is-48x48">
								<i
									className="fa fa-spinner fa-pulse fa-1x fa-fw"
									style={{display:(urlLoad === 1) ? 'block' : 'none'}} ></i>
								<img
									src="http://bulma.io/images/placeholders/96x96.png"
									style={{display:(urlLoad === 0) ? 'block' : 'none'}}
									alt="ImageDefault" />
								<img
									src={url}
									onLoad={this._handleImageLoaded}
									onError={this._handleImageError}
									style={{display:(urlLoad === 2) ? 'block' : 'none'}}
									alt="ImageSelect" />
			        </figure>
			      </div>
			      <div className="media-content">
			        <div className="field">
							  <p className="control has-icons-left">
							    <input
							    	className="input is-small"
							    	type="text"
							    	onKeyUp={this._handleTextName}
							    	placeholder="Nombre Usuario" />
							    <span className="icon is-small is-left">
							      <i className="fa fa-user"></i>
							    </span>
							  </p>
							</div>
							<div className="field">
							  <p className="control has-icons-left">
							    <input
							    	className="input is-small"
							    	type="text"
							    	placeholder="Url Imagen"
							    	onKeyUp={this._handleTextUrl} />
							    <span className="icon is-small is-left">
							      <i className="fa fa-image"></i>
							    </span>
							  </p>
							</div>
			      </div>
			    </div>
			    <div className="content">
			    	<div className="field">
						  <p className="control has-icons-left">
						    <textarea
						    	className="textarea is-small"
						    	placeholder="Descripcion..."
						    	style={{resize:'none'}}
						    	onKeyUp={this._handleTextDesc}
						    	maxLength={200} ></textarea>
						  </p>
						  <p className="help is-success">Caracteres {200-desclen} de 200</p>
						</div>
			    </div>
			  </div>
			  <footer className="card-footer">
    			<a className="card-footer-item">Guardar</a>
    		</footer>
			</div>
		);
	}
}

export default CardIn;

/*


*/
