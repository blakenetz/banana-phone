import React, { Component } from 'react';

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: this.props.location,
			localUrl: (this.props.location == 'america')
				? 'https://www.amazon.com/Banana-Phone-Wireless-Bluetooth-Handset/dp/B0761VVFDX/ref=sr_1_1?ie=UTF8&qid=1511969802&sr=8-1&keywords=banana+phone+handset'
				: 'https://igg.me/at/bananaphone',
			backupUrl: (this.props.location == 'america')
				? 'https://igg.me/at/bananaphone'
				: 'https://www.amazon.com/Banana-Phone-Wireless-Bluetooth-Handset/dp/B0761VVFDX/ref=sr_1_1?ie=UTF8&qid=1511969802&sr=8-1&keywords=banana+phone+handset',
			backupText: (this.props.location == 'america')
				? 'Ordering from outside the US?'
				: 'Ordering from within the US?',
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
						<a href={this.state.localUrl} target="_blank" rel="noopener noreferrer">
							<button>
								<i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
								Buy now!
							</button>
						</a>
						<a href={this.state.backupUrl} target="_blank" rel="noopener noreferrer">
							{this.state.backupText}
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