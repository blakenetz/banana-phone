import React, { Component } from 'react';

class LandingPage extends Component {
	render(){
		return (
			<section className="lp">
				<div>
					<h1>A PHONE WITH APPEAL</h1>
					<img src="images/side-right.png" alt="image of a Banana Phone" />
				</div>
				
				<div className='scroll'>
					<i className="fa fa-long-arrow-down fa-2x" aria-hidden="true"></i>
					<p>scroll down</p>
				</div>
			</section>
		)
	}

}

export default LandingPage;
