import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar  from '../root/NavBar';
import FilmsPlaceholder from './FilmsPlaceholder';

class FilmsCategory extends Component {
  
  render() {
    return (
        <section>
          <NavBar/>
          <FilmsPlaceholder/>
        </section>
    );
  }
}

export default FilmsCategory;
