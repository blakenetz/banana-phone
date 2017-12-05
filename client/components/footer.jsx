import React, { Component } from 'react';

export default class Footer extends Component {
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

					<a href={(this.props.location == 'america') ? 'https://www.amazon.com/Banana-Phone-Wireless-Bluetooth-Handset/dp/B0761VVFDX/ref=sr_1_1?ie=UTF8&qid=1511969802&sr=8-1&keywords=banana+phone+handset' : 'https://igg.me/at/bananaphone'}
						target="_blank"
						rel="noopener noreferrer" >
						<button>
							<i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
							Buy now!
						</button>
					</a>
				</section>
				<section>
					<p>#bananaphone</p>
				</section>
			</footer>
		)
	}
}