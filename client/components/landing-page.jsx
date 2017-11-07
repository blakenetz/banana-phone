import React, { Component } from 'react';

export default class LandingPage extends Component {
  render(){
    return (
      <section className="lp">
        <div className="lpTop">
          <h1>Banana Phone</h1>
        </div>
        <div className="lpBottom">
          <img src="http://via.placeholder.com/600x250" alt="placeholder" />
          <p>Banana Phone is a banana-shaped, Bluetooth®-enabled, mobile handset that connects to your smartphone: interact with your voice assistant (Siri & Google Assistant) and talk to your friends on a banana!</p>
        </div>
      </section>
    )
  }
}
