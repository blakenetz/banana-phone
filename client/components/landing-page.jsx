import React, { Component } from 'react';

export default class LandingPage extends Component {
	render(){
		return (
			<section className="lp">
				<div id="top">
					<img src="images/front.png" alt="Banana Phone front view" />
				</div>
				<img id="igBadge" src="images/indiegogo-badge.png" alt="Successfully funded with Indiegogo" />
			</section>
		)
	}
}
