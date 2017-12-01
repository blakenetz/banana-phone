import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/nav';
import LandingPage from './components/landing-page';
import BananaPhone from './components/banana-phone';
import BananaPhoneLabeled from './components/banana-phone-labels';
import Gorillas from './components/gorillas';
import Taglines from './components/taglines';
import Footer from './components/footer';

require('./style/style.scss');

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <LandingPage />
        <BananaPhone />
        <BananaPhoneLabeled />
        <Gorillas />
        <Taglines />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
