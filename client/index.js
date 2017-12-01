import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScrollReveal from 'scrollreveal';

import Nav from './components/nav';
import LandingPage from './components/landing-page';
import About from './components/about';
import Features from './components/features';
import Gorillas from './components/gorillas';
import Press from './components/press';
import FAQ from './components/faq';
import Footer from './components/footer';

require('./style/style.scss');

class App extends Component {
  componentDidMount() {
    return;

    window.sr = ScrollReveal();
    // about section
    sr.reveal('#aboutText', {
      duration: 1500,
      delay: 500,
    });
    sr.reveal('.steps', {
      duration: 1500,
      delay: 500,
    }, 50);
    // feature and gorilla section
    sr.reveal('#phoneLabelled', {
      duration: 1500,
      delay: 500,
    });
    sr.reveal('.featureLi', {
      duration: 1500,
      delay: 500,
    }, 50);
    sr.reveal('.right', {
      duration: 1500,
      delay: 500,
    });
    sr.reveal('.logoWrapper', {
      duration: 1500,
      delay: 500,
    }, 50);

  }

  render() {
    return (
      <div>
        <Nav />
        <LandingPage />
        <About />
        <Features />
        <Gorillas />
        <Press />
        <FAQ />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
