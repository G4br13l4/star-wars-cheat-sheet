import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class NavBar extends Component {

  render() {
    return (
        <nav>
          <header className="h-center">
            <h1>Star Wars Data</h1>
          </header>
          <ul className="h-center">
            <li><a href="/films">Films</a></li>
            <li><a href="/people">People</a></li>
            <li><a href="/planets">Planets</a></li>
            <li><a href="/species">Species</a></li>
            <li><a href="/starships">Starships</a></li>
            <li><a href="/vehicles">Vehicles</a></li>
          </ul>  
        </nav>
    );
  }
}

export default NavBar;
