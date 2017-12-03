import React, { Component } from 'react';

export default class About extends Component {
	handleClick () {
		if (this.refs.video.paused) {
			this.refs.video.play();
			this.refs.video.controls = true;
		} else {
			this.refs.video.pause();
			this.refs.video.controls = false;
		}
	}

	render(){
		return (
			<section className="about">
				<div id="aboutText" className="container">
					<p><strong>Banana Phone</strong> is a banana-shaped, Bluetooth<sup>&reg;</sup>-enabled, mobile handset that connects to your smartphone: interact with your voice assistant (Siri & Google Assistant) and talk to your friends <i>on a banana!</i></p>
					<p>We’re taking a bite out of the Apple accessory ecosystem one Banana at a time.</p>
				</div>

				<div className="videoWrapper container">
					<video src="images/video.mp4"
									preload="metadata"
									poster="images/videoPoster.png"
									onClick={this.handleClick.bind(this)}
									ref="video">
						<p>Sorry! Your browser is a rotten banana and doesn't support mp4 videos</p>
					</video>
				</div>

				<div className="stepsWrapper container">
					<div className="steps srAsync-about">
						<div className="iconWrap">
							<i className="fa fa-mobile" aria-hidden="true"></i>
						</div>
						<div className="iconWrap">
							<i className="fa fa-plus bp-plus" aria-hidden="true"></i>
						</div>
						<div className="iconWrap">
							<img src="images/logo-blacktext.png" alt="Banana Phone logo" />
						</div>
						<div className="instruction">
							<p><strong>Step One:</strong></p>
							<ul>
								<li>Pair your smartphone via Bluetooth</li>
							</ul>
						</div>
					</div>

					<div className="steps srAsync-about">
						<div className="iconWrap">
							<i className="fa fa-phone" aria-hidden="true"></i>
							<i className="fa fa-arrow-down bp-arrow" aria-hidden="true"></i>
						</div>
						<div className="iconWrap">
							<i className="fa fa-plus bp-plus" aria-hidden="true"></i>
						</div>
						<div className="iconWrap">
							<img src="images/logo-blacktext.png" alt="Banana Phone logo" />
						</div>
						<div className="instruction">
							<p><strong>Step Two:</strong></p>
							<ul>
								<li>Receive calls on your Banana Phone</li>
								<li>Click the multifunctional button to answer</li>
							</ul>
						</div>
					</div>

					<div className="steps srAsync-about">
						<div className="iconWrap">
							<i className="fa fa-phone" aria-hidden="true"></i>
							<i className="fa fa-arrow-up bp-arrow" aria-hidden="true"></i>
						</div>
						<div className="iconWrap">
							<i className="fa fa-plus bp-plus" aria-hidden="true"></i>
						</div>
						<div className="iconWrap">
							<img src="images/logo-blacktext.png" alt="Banana Phone logo" />
						</div>
						<div className="instruction">
							<p><strong>Step Three:</strong></p>
							<ul>
								<li>Initiate calls from your Banana Phone</li>
								<li>Voice activate calling with Siri and OK Google</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="parallax">
					<img src="images/banana-bunch.png" alt="a Banana Phone in a banana bunch" />
				</div>
			</section>
		)
	}
}