import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './components/landing-page';
import Product from './components/product';
import SignupForm from './components/signup-form';

require('./style/style.scss');

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
