import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar  from '../root/NavBar';

class PlanetsCategory extends Component {
  render() {
    return (
        <section>
            <NavBar/>
            <div className="empty">
              <p>Very soon you will see the data of Planets</p>
            </div>
        </section>
    );
  }
}

export default PlanetsCategory;
