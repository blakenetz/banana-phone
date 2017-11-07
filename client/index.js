import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/nav';
import LandingPage from './components/landing-page';
import Indiegogo from './components/indiegogo';
import Gorillas from './components/gorillas';
import Footer from './components/footer';

require('./style/style.scss');

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <LandingPage />
        <Indiegogo />
        <Gorillas />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
