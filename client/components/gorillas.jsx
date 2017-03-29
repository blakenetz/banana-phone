import React, { Component } from 'react';

class About extends Component {
  render(){
    return (
      <section className="gorillas row">
        <div className="one-half column bg-face"></div>
        <div className="one-half column bg-hand">
          <p>Giving back is important at Banana Phone, which is why we're routing 1% of all sales to Gearing Up for Gorillas.</p>
          <p>G4G is the only UK charity that focuses 100% on the conservation of the rare mountain gorilla in Virunga National Park, located in eastern DR Congo, by providing funding and equipment to the rangers who protect them</p>
          <p>Join us in helping provide what the rangers need and make a real difference to the future of the mountain gorilla.  G4G has proven that practical assistance can be directed to where it really matters - to the rangers at the sharp end.</p>
          <p>To learn more, checkout the award winning documentary Virunga on Netflix or <a href="http://www.g4g.co.uk" target="_blank">G4G.co.uk</a></p>
        </div>
      </section>
    )
  }

}

export default About;
