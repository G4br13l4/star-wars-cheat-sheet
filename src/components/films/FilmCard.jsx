import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FilmCard extends Component {

  render() {
    return (
        <div className="film-card">
            <h2>Title: </h2>
            <p>Episode: </p>
            <p>Release Date:</p>
        </div>
    );
  }
}

export default FilmCard;
