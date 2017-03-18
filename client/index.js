import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './components/landing-page';
import About from './components/about';

require('./style/style.scss');

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <About />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
