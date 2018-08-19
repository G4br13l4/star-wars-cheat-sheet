import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar  from '../root/NavBar';
import BreadCrumb  from '../root/BreadCrumb';
import FilmsPlaceholder from './FilmsPlaceholder';

class FilmsCategory extends Component {
  
  render() {
    return (
        <section>
          <NavBar/>
          <BreadCrumb
            category="Films"
          />
          <FilmsPlaceholder/>
        </section>
    );
  }
}

export default FilmsCategory;
