import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FilmsCategory from './components/films/FilmsCategory';
import PeopleCategory from './components/people/PeopleCategory';
import PlanetsCategory from './components/planets/PlanetsCategory';
import SpeciesCategory from './components/species/SpeciesCategory';
import StarshipsCategory from './components/starships/StarshipsCategory';
import VehiclesCategory from './components/vehicles/VehiclesCategory';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Route exact path="/" component={FilmsCategory} />
            <Route path="/films" component={FilmsCategory} />
            <Route path="/people" component={PeopleCategory} />
            <Route path="/planets" component={PlanetsCategory} />
            <Route path="/species" component={SpeciesCategory} />
            <Route path="/starships" component={StarshipsCategory} />
            <Route path="/vehicles" component={VehiclesCategory} />
          </div>
      </Router>
    );
  }
}

export default App;
