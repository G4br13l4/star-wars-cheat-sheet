import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
        <nav>
          <header className="h-center">
            <img src="assets/logo.png"/>
          </header>
          <div className="h-center">
            <ul className="nav-btns h-center">
              <li className="nav-btn"><Link to="/films">Films</Link></li>
              <li className="nav-btn"><Link to="/people">People</Link></li>
              <li className="nav-btn"><Link to="/planets">Planets</Link></li>
              <li className="nav-btn"><Link to="/species">Species</Link></li>
              <li className="nav-btn"><Link to="/starships">Starships</Link></li>
              <li className="nav-btn"><Link to="/vehicles">Vehicles</Link></li>
            </ul> 
          </div> 
        </nav>
    );
  }
}

export default NavBar;
