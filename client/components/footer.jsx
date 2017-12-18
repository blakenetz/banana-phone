import React, { Component } from 'react';

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: this.props.location,
			isAmerica: (this.props.location.toLowerCase() == 'america'),
			americaURL: 'https://www.amazon.com/Banana-Phone-Wireless-Bluetooth-Handset/dp/B0761VVFDX/ref=sr_1_1?ie=UTF8&qid=1511969802&sr=8-1&keywords=banana+phone+handset',
			internationURL: 'https://igg.me/at/bananaphone',
		}
	}
	render(){
		return (
			<footer>
				<section>
					<p>visit us at</p>
				</section>
				<section>
					<a href="https://www.facebook.com/bananaphone.io/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i></a>
					<a href="https://www.instagram.com/bananaphone.io/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
					<a href="https://twitter.com/bananaphoneco?lang=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-3x" aria-hidden="true"></i></a>

					<div className="buttonWrapper">
						<a href={this.state.isAmerica ? this.state.americaURL : this.state.internationURL} target="_blank" rel="noopener noreferrer">
							<button>
								<i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
								Buy now!
							</button>
						</a>
						<a href={this.state.isAmerica ? this.state.internationURL : this.state.americaURL} target="_blank" rel="noopener noreferrer">
							Ordering from {this.state.isAmerica ? 'outside' : 'within'} the US?
						</a>
					</div>
				</section>
				<section>
					<p>#bananaphone</p>
				</section>
			</footer>
		)
	}
}