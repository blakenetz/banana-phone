import React, { Component } from 'react';
import debounce from 'javascript-debounce';
import 'whatwg-fetch';

export default class Nav extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleScroll = debounce(this.handleScroll.bind(this), 0);
		this.state = {
			location: this.props.location,
			isAmerica: (this.props.location.toLowerCase() == 'america'),
			americaURL: 'https://www.amazon.com/Banana-Phone-Wireless-Bluetooth-Handset/dp/B0761VVFDX/ref=sr_1_1?ie=UTF8&qid=1511969802&sr=8-1&keywords=banana+phone+handset',
			internationURL: 'https://igg.me/at/bananaphone',
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(e){
		const nav = document.querySelector('nav')
		if (window.pageYOffset > 200) {
			nav.classList.remove("is-hidden");
		}
		else{
			nav.classList.add("is-hidden");
		}
	}

	handleClick(e){
		const fbUrl = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Figg.me%2Fat%2Fbananaphone&amp;src=sdkpreparse";
		const twUrl = `https://twitter.com/intent/tweet
			?text=${encodeURI("Yellow!? Banana Phones are taking over. Get a phone with appeal at bananaphone.io 🍌")}
			&hashtags=${encodeURI("phonewithappeal,yellow?,gorillamarketing")}`;

		window.open(
			(e.currentTarget.id === 'fb') ? fbUrl : twUrl,
			'_blank',
			'location=yes,height=570,width=520,scrollbars=yes,status=yes'
		);
	}

	render() {
		return (
			<nav className="is-hidden">
				<section>
					<img src="images/logo-whitetext.png" alt="Banana Phone logo" />
				</section>

				<section id="social-media">

					{/* FACEBOOK */}
					<figure>
						<a className="fb-xfbml-parse-ignore"
							id="fb"
							onClick={this.handleClick}
							href='javascript:void(0)'
							target='_self'
							rel='noopener noreferrer'>

							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								 width="45" height="45" viewBox="0 0 67 67" enableBackground="new 0 0 67 67">
								<path fill="#000000" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" d="M29.765,50.32h6.744V33.998h4.499l0.596-5.624
									h-5.095l0.007-2.816c0-1.466,0.141-2.253,2.244-2.253h2.812V17.68h-4.5c-5.405,0-7.307,2.729-7.307,7.317v3.377h-3.369v5.625h3.369
									V50.32z M34,64C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4c16.568,0,30,13.431,30,30C64,50.568,50.568,64,34,64z"/>
							</svg>
						</a>
						<figcaption>Share</figcaption>
					</figure>

					{/* TWITTER */}
					<figure>
						<a className="twitter-share-button"
								onClick={this.handleClick}
								id="tw"
								href='javascript:void(0)'
								target='_self'
								rel='noopener noreferrer'>
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								 width="45" height="45" viewBox="0 0 67 67" enableBackground="new 0 0 67 67">
								<path fill="#000000" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" d="M38.167,22.283
									c-2.619,0.953-4.274,3.411-4.086,6.101l0.063,1.038l-1.048-0.127c-3.813-0.487-7.145-2.139-9.974-4.915l-1.383-1.377l-0.356,1.017
									c-0.754,2.267-0.272,4.661,1.299,6.271c0.838,0.89,0.649,1.017-0.796,0.487c-0.503-0.169-0.943-0.296-0.985-0.233
									c-0.146,0.149,0.356,2.076,0.754,2.839c0.545,1.06,1.655,2.097,2.871,2.712l1.027,0.487l-1.215,0.021
									c-1.173,0-1.215,0.021-1.089,0.467c0.419,1.378,2.074,2.84,3.918,3.476l1.299,0.444l-1.131,0.678
									c-1.676,0.977-3.646,1.525-5.616,1.566C20.775,43.256,20,43.341,20,43.404c0,0.212,2.557,1.397,4.044,1.865
									c4.463,1.377,9.765,0.782,13.746-1.568c2.829-1.674,5.657-5,6.978-8.221c0.713-1.715,1.426-4.852,1.426-6.354
									c0-0.975,0.062-1.102,1.236-2.267c0.691-0.678,1.34-1.419,1.467-1.631c0.209-0.403,0.188-0.403-0.881-0.043
									c-1.781,0.636-2.033,0.551-1.152-0.402c0.65-0.678,1.426-1.907,1.426-2.267c0-0.063-0.314,0.042-0.671,0.233
									c-0.377,0.212-1.216,0.53-1.845,0.72l-1.131,0.361l-1.026-0.7c-0.566-0.381-1.361-0.805-1.781-0.932
									C40.766,21.902,39.131,21.944,38.167,22.283z M34,64C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4c16.568,0,30,13.431,30,30
									C64,50.568,50.568,64,34,64z"/>
							</svg>
						</a>
						<figcaption>Tweet</figcaption>
					</figure>

					{/* BUY NOW */}
					<figure>
						<a href={this.state.isAmerica ? this.state.americaURL : this.state.internationURL} id="navButton" target="_blank" rel="noopener noreferrer">
							<button>
								<i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
								Buy now!
							</button>
						</a>
						<a href={this.state.isAmerica ? this.state.internationURL : this.state.americaURL} className="no-padding" target="_blank" rel="noopener noreferrer">
							Ordering from {this.state.isAmerica ? 'outside' : 'within'} the US?
						</a>
					</figure>
				</section>
			</nav>
		)
	}
}
