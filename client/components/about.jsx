import React, { Component } from 'react';

export default class About extends Component {
	handleClick () {
		if (this.refs.video.paused) {
			this.refs.video.play();
			this.refs.video.controls = true;
		}
		else {
			this.refs.video.pause();
			this.refs.video.controls = false;
		}
	}

	render(){
		return (
			<section className="container about">
				<p><strong>Banana Phone</strong> is a banana-shaped, Bluetooth<sup>&reg;</sup>-enabled, mobile handset that connects to your smartphone: interact with your voice assistant (Siri & Google Assistant) and talk to your friends <i>on a banana!</i></p>
				<p>We’re taking a bite out of the Apple accessory ecosystem one Banana at a time.</p>

				<div className="container">
			<video src="images/video.mp4"
							preload="metadata"
							poster="images/videoPoster.png"
							onClick={this.handleClick.bind(this)}
							ref="video">
				<p>Sorry! Your browser is a rotten banana and doesn't support mp4 videos</p>
			</video>
		</div>
			</section>
		)
	}

}
