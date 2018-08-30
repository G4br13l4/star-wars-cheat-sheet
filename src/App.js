import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FilmsPlaceholder from './components/films/FilmsPlaceholder';
import PeoplePlaceholder from './components/people/PeoplePlaceholder';
import PlanetsPlaceholder from './components/planets/PlanetsPlaceholder';
import SpeciesPlaceholder from './components/species/SpeciesPlaceholder';
import StarshipsPlaceholder from './components/starships/StarshipsPlaceholder';
import VehiclesPlaceholder from './components/vehicles/VehiclesPlaceholder';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Route exact path="/" component={FilmsPlaceholder} />
            <Route path="/films" component={FilmsPlaceholder} />
            <Route path="/people" component={PeoplePlaceholder} />
            <Route path="/planets" component={PlanetsPlaceholder} />
            <Route path="/species" component={SpeciesPlaceholder} />
            <Route path="/starships" component={StarshipsPlaceholder} />
            <Route path="/vehicles" component={VehiclesPlaceholder} />
          </div>
      </Router>
    );
  }
}

export default App;
