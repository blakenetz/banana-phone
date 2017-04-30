import React, { Component } from 'react';
import Signup from './signup-form'

class LandingPage extends Component {
  render(){
    return (
      <section className="lp">
        <img src="images/logo.png" alt="Banana Phone logo" />
        <h1>A PHONE WITH APPEAL</h1>
        <Signup />
        <div className='scroll'>
          <i className="fa fa-long-arrow-down fa-2x" aria-hidden="true"></i>
          <p>scroll down</p>
        </div>
      </section>
    )
  }

}

export default LandingPage;
