import React, { Component } from 'react';
import NavBar  from '../root/NavBar';

class SpeciesPlaceholder extends Component {
  render() {
    return (
        <section>
            <NavBar/>
            <div className="empty">
              <p>Very soon you will see the data of Species</p>
            </div>
        </section>
    );
  }
}

export default SpeciesPlaceholder;
