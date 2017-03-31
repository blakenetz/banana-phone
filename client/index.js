import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './components/landing-page';
import BananaPhone from './components/banana-phone';
import Gorillas from './components/gorillas';
import Taglines from './components/taglines';
import SignupForm from './components/signup-form';
import Footer from './components/footer';

require('./style/style.scss');

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <BananaPhone />
        <Gorillas />
        <Taglines />
        <SignupForm />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
