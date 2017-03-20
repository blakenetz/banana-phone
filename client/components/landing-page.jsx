import React, { Component } from 'react';

class LandingPage extends Component {
  createMarkup(title) {
    const newTitle = title.split(' ').map((word) => {
      return word.split('').map((letter, i) => {
        return letter = i == 0 ? '<span class="taller">' + letter + '</span>' : letter;
      })
    })

    return {__html: newTitle.join(' ').replace(/,/g, '')}
  }

  render(){
    const title = 'A PHONE WITH APPEAL'
    return (
      <section className="lp">
        <img src="images/logo.png" />
        <h1 dangerouslySetInnerHTML={this.createMarkup(title)}/>
      </section>
    )
  }

}

export default LandingPage;
