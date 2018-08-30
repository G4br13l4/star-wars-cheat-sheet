import React, { Component } from 'react';
import NavBar  from '../root/NavBar';

class VehiclesPlaceholder extends Component {
  render() {
    return (
        <section>
            <NavBar/>
            <div className="empty">
              <p>Very soon you will see the data of Vehicles</p>
            </div>
        </section>
    );
  }
}

export default VehiclesPlaceholder;
