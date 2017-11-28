import React, { Component } from 'react';

export default class About extends Component {
  render(){
    return (
      <section className="container about">
      	<div id="aboutText">
	        <p><strong>Banana Phone</strong> is a banana-shaped, Bluetooth<sup>&reg;</sup>-enabled, mobile handset that connects to your smartphone: interact with your voice assistant (Siri & Google Assistant) and talk to your friends <i>on a banana!</i></p>
	        <p>We’re taking a bite out of the Apple accessory ecosystem one Banana at a time.</p>
      	</div>

        <div className="stepsWrapper"> 

        <div className="steps">
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
            <p><strong>Step One</strong></p>
            <ul>
              <li>Pair your smartphone via Bluetooth</li>
            </ul>
          </div>
        </div>

        <div className="steps">
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
            <p><strong>Step Two</strong></p>
            <ul>
              <li>Recieve calls on your Banana Phone</li>
              <li>Click the multifunctional button to answer</li>
            </ul>
          </div>
        </div>

        <div className="steps">
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
            <p><strong>Step Three</strong></p>
            <ul>
              <li>Initiate calls from your Banana Phone</li>
              <li>Voice activate calling with Siri and OK Google</li>
            </ul>
          </div>
        </div>
        </div>
      </section>
    )
  }
}