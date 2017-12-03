import React, { Component } from 'react';

export default class Gorillas extends Component {
  render(){
    return (
      <section className="gorillas row">

        <div className="one-half column left">
          <img src="images/gorilla.jpg" alt="rendition of a gorilla" />
        </div>

        <div className="one-half column right">
          <div>
            <h2>Save Gorillas</h2>
          </div>

          <div>
            <p className="srAsync-gorillas">Giving back is important at Banana Phone, which is why we're routing 1% of all sales to Gearing Up for Gorillas.</p>
            <p className="srAsync-gorillas">G4G focuses 100% on the conservation of the rare mountain gorilla in Virunga National Park, located in eastern DR Congo, by providing funding and equipment to the rangers who protect them.</p>
            <p className="srAsync-gorillas">Join us in helping provide what the rangers need and make a real difference to the future of the mountain gorilla. G4G has proven that practical assistance can be directed to where it really matters - to the rangers at the sharp end.</p>
            <p className="srAsync-gorillas">To learn more, checkout the award winning documentary Virunga on Netflix or visit the Gearing Up for Gorillas website at <a href="http://www.g4g.co.uk" target="_blank">G4G.co.uk</a></p>
          </div>

          <figure>
            <img src="/images/g4g-logo.png" alt="Gearing Up For Gorillas logo" />
          </figure>
        </div>

      </section>
    )
  }
}