import React, { Component } from 'react';
import About from './about';
import SignupForm from './signup-form';

class LandingPage extends Component {
  render(){
    return (
      <section className="lp">
        <img src="images/logo.png" />
        <h1>A PHONE WITH APPEAL</h1>
        <About />
        <SignupForm />
      </section>
    )
  }

}

export default LandingPage;
