import React, { Component } from 'react';

import About from './about';

class BananaPhone extends Component {
  render(){
    return (
      <section className="phone">
        <img src="/images/phone-close-glossy.jpg" alt="upclose image of the Banana Phone" />
        <About />
      </section>
    )
  }

}

export default BananaPhone;
