import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NavBar extends Component {

  render() {
    return (
        <nav>
          <header className="h-center">
            <img src="assets/logo.png"/>
          </header>
          <div className="h-center">
            <ul className="nav-btns h-center">
              <li className="nav-btn"><a href="/films">Films</a></li>
              <li className="nav-btn"><a href="/people">People</a></li>
              <li className="nav-btn"><a href="/planets">Planets</a></li>
              <li className="nav-btn"><a href="/species">Species</a></li>
              <li className="nav-btn"><a href="/starships">Starships</a></li>
              <li className="nav-btn"><a href="/vehicles">Vehicles</a></li>
            </ul> 
          </div> 
        </nav>
    );
  }
}

export default NavBar;
