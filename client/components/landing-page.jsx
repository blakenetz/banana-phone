import React, { Component } from 'react';

export default class LandingPage extends Component {
	render(){
		return (
			<section className="landingPage">
				<div className="lp">
					<div className="logoWrapper">
						<img src="images/logo-whitetext.png" alt="Banana Phone logo" />
						<h1>A PHONE WITH APPEAL</h1>
					</div>

					<div className="scroll">
						<i className="fa fa-long-arrow-down fa-2x" aria-hidden="true"></i>
						<p>scroll down</p>
					</div>

					<div className="igBadge">
						<img src="images/indiegogo-badge.png" alt="successfully funded on Indiegogo" />
					</div>
				</div>

				<div className="parallax">
					<img src="/images/front.png" alt="upclose image of the Banana Phone" />
				</div>

			</section>
		)
	}
}
