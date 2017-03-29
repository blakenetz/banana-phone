import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './components/landing-page';
import Gorillas from './components/gorillas';
import SignupForm from './components/signup-form';

require('./style/style.scss');

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <Gorillas />
        <SignupForm />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
