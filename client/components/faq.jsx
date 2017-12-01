import React, { Component } from 'react';

export default class FAQ extends Component {
  render(){
    return (
      <section className="faq">
		<h2>FAQ</h2>

		<p><strong>Q1: Where is the Banana Phone Charger? I didn’t see it in the box?</strong></p>
		<p>A1: Have no fear!  The Banana Phone Micro USB charging cord is located inside the white paper tray cube base.  Photo below.  It can be connected to any wall outlet base or computer for charging.</p>

		<p><strong>Q2: Why can’t I activate Siri on my iPhone through Banana Phone?</strong></p>
		<p className="no-padding">A2: Easy Fix! Please ensure 3 Siri settings are activated on your iPhone by following the steps below:</p>
		<ul>
			<li className="no-padding">Step 1: Open Settings</li>
			<li className="no-padding">Step 2: Select Siri and Search</li>
			<li className="no-padding">Step 3: Toggle On:</li>
			<li className="no-padding faqli"><i>Listen for “Hey Siri”</i></li>
			<li className="no-padding faqli"><i>Press Home for Siri</i></li>
			<li className="no-padding faqli"><i>Allow Siri When Locked</i></li>
		</ul>

		<p><strong>Q3: On Android, I’m having trouble knowing when to say the name of the person I’m dialing.  What’s the trick?</strong></p>
		<p>A3: No worries.  We recommend waiting for the beep from your Android before you say the name of the person you wish to dial.  It’s best to practice a couple times with your Android device in front of you. Ensure that “OK Google” has been activated on your smart phone.</p>
      </section>
    )
  }
}