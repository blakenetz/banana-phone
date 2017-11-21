import React, { Component } from 'react';

import Indiegogo from './indiegogo';

export default class About extends Component {
  render(){
    return (
      <section className="container about">
      	<div>
	        <p><strong>Banana Phone</strong> is a banana-shaped, Bluetooth<sup>&reg;</sup>-enabled, mobile handset that connects to your smartphone: interact with your voice assistant (Siri & Google Assistant) and talk to your friends <i>on a banana!</i></p>
	        <p>We’re taking a bite out of the Apple accessory ecosystem one Banana at a time.</p>
      	</div>
      	<div>
      		<Indiegogo />
      	</div>
      </section>
    )
  }
}