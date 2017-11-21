import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';

export default class About extends Component {
  componentDidMount() {
    window.sr = ScrollReveal();
    sr.reveal('#aboutText', { 
      duration: 1500,
      delay: 500,
      reset: true,
    });
    sr.reveal('.steps', { 
      duration: 1500,
      delay: 500,
      reset: true,
    }, 100);
  }

  render(){
    return (
      <section className="container about">
      	<div id="aboutText">
	        <p><strong>Banana Phone</strong> is a banana-shaped, Bluetooth<sup>&reg;</sup>-enabled, mobile handset that connects to your smartphone: interact with your voice assistant (Siri & Google Assistant) and talk to your friends <i>on a banana!</i></p>
	        <p>We’re taking a bite out of the Apple accessory ecosystem one Banana at a time.</p>
      	</div>

        <div className="steps">
          <div className="iconWrap">
            <i className="fa fa-mobile fa-5x" aria-hidden="true"></i>
          </div>
          <div className="iconWrap">
            <i className="fa fa-plus fa-3x" aria-hidden="true"></i>
          </div>
          <div className="iconWrap">
            <img src="images/logo-blacktext.png" alt="Banana Phone logo" />
          </div>
          <div className="instruction">
            <p><strong>Step One</strong></p>
            <ul>
              <li>Pair your smartphone via Bluetooth</li>
            </ul>
          </div>
        </div>

        <div className="steps">
          <div className="iconWrap">
            <i className="fa fa-phone fa-5x" aria-hidden="true"></i>
            <i className="fa fa-arrow-down fa-2x" aria-hidden="true"></i>
          </div>
          <div className="iconWrap">
            <i className="fa fa-plus fa-3x" aria-hidden="true"></i>
          </div>
          <div className="iconWrap">
            <img src="images/logo-blacktext.png" alt="Banana Phone logo" />
          </div>
          <div className="instruction">
            <p><strong>Step Two</strong></p>
            <ul>
              <li>Recieve calls on your Banana Phone</li>
              <li>Click the multifunctional button to answer</li>
            </ul>
          </div>
        </div>

        <div className="steps">
          <div className="iconWrap">
            <i className="fa fa-phone fa-5x" aria-hidden="true"></i>
            <i className="fa fa-arrow-up fa-2x" aria-hidden="true"></i>
          </div>
          <div className="iconWrap">
            <i className="fa fa-plus fa-3x" aria-hidden="true"></i>
          </div>
          <div className="iconWrap">
            <img src="images/logo-blacktext.png" alt="Banana Phone logo" />
          </div>
          <div className="instruction">
            <p><strong>Step Three</strong></p>
            <ul>
              <li>Initiate calls from your Banana Phone</li>
              <li>Voice activate calling with Siri and OK Google</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}