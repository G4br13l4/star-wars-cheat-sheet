import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar  from '../root/NavBar';
import PeoplePlaceholder from './PeoplePlaceholder';

class PeopleCategory extends Component {
  render() {
    return (
        <section>
            <NavBar/>
            <PeoplePlaceholder/>
        </section>
    );
  }
}

export default PeopleCategory;