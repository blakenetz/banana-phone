import React, { Component } from 'react';

export default class Features extends Component {
  render(){
    return (
      <section>
        <div className="features">
          <div>
            <h2>Features & Functions</h2>
            <ul>
        			<li className="srAsync-features">Talk Time: 10 Hours</li>
        			<li className="srAsync-features">Idle Time:  70 Hours</li>
        			<li className="srAsync-features">Built in rechargeable lithium battery w/ micro USB</li>
        			<li className="srAsync-features">Qualcomm Chipset: certified conflict free components</li>
        			<li className="srAsync-features">Environmentally conscious 100% recycled ABS plastic</li>
        			<li className="srAsync-features">Volume control (+/-)</li>
        			<li className="srAsync-features">Home Button: Outbound Call/ Answer/ Bluetooth pair</li>
        			<li className="srAsync-features">Reduce exposure to cell phone electromagnetic radiation by keeping your Smartphone away from your head</li>
            </ul>
          </div>

          <figure>
            	<img src="/images/front-labelled.png" alt="Instructions to Banana Phone" />
          </figure>

        </div>
      </section>
    )
  }

}
