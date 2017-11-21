import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return (
      <footer>
        <section>
          <p>visit us at</p>
        </section>
        <section>
          <a href="https://www.facebook.com/bananaphone.io/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/bananaphone.io/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
          <a href="https://twitter.com/bananaphoneco?lang=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-3x" aria-hidden="true"></i></a>
        </section>
        <section>
          <p>#phonewithappeal #yellow? #gorillamarketing</p>
        </section>
      </footer>
    )
  }
}

export default Footer;
