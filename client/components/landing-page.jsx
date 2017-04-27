import React, { Component } from 'react';
import Signup from './signup-form'

class LandingPage extends Component {
  render(){
    return (
      <section className="lp">
        <img src="images/logo.png" alt="Banana Phone logo" />
        <h1>A PHONE WITH APPEAL</h1>
        <Signup />
      </section>
    )
  }

}

export default LandingPage;
