import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { spawn } from 'child_process';

class FilmCard extends Component {

  render() {
    return (
        <div className="film-card">
            <p><span className="bold">Title: </span>{this.props.title}</p>
            <p><span className="bold">Episode: </span>{this.props.episode}</p>
            <p><span className="bold">Release Date: </span>{this.props.date}</p>
        </div>
    );
  }
}

export default FilmCard;
