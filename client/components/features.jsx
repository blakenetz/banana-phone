import React, { Component } from 'react';

export default class Features extends Component {
  render(){
    return (
      <section className="phoneLabelled">
        <div>
          <h2>Talk More Smile More</h2>
          <ul>
      			<li className="featureLi">Talk Time: 10 Hours</li>
      			<li className="featureLi">Idle Time:  70 Hours</li>
      			<li className="featureLi">Built in rechargeable lithium battery w/ micro USB</li>
      			<li className="featureLi">Qualcomm Chipset: certified conflict free components</li>
      			<li className="featureLi">Environmentally conscious 100% recycled ABS plastic</li>
      			<li className="featureLi">Volume control (+/-)</li>
      			<li className="featureLi">Home Button: Outbound Call/ Answer/ Bluetooth pair</li>
      			<li className="featureLi">Reduce exposure to cell phone electromagnetic radiation by keeping your Smartphone away from your head</li>
          </ul>
        </div>
        <figure>
          	<img src="/images/front-labelled.png" alt="Instructions to Banana Phone" />
        </figure>
      </section>
    )
  }

}
