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
    window.sr = ScrollReveal();

    // about section
    sr.reveal('#aboutText', {
      duration: 1500,
      delay: 500,
    });
    sr.reveal('.lp', {
      duration: 1500,
      delay: 500,
    }, 50);
    sr.reveal('.srAsync-about', {
      duration: 1500,
      delay: 500,
    }, 50);
    sr.reveal('.srAsync-features', {
      duration: 1500,
      delay: 500,
    }, 50);
    sr.reveal('.srAsync-gorillas', {
      duration: 1500,
      delay: 500,
    }, 50);
    sr.reveal('.srAsync-faq', {
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
