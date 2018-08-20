import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FilmDetail  from './FilmDetail';

class FilmCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let film = (
      <FilmDetail
        title={this.props.title}
        episode={this.props.episode}
        director={this.props.director}
        producer={this.props.producer}
        date={this.props.date}
        characters={this.props.characters}
        showChar={this.props.showChar}
      />
    );
    this.props.showFilm(film);
  }

  render() {
    return (
        <div onClick={this.handleClick} className="film-card" >
            <p><span className="bold">Title: </span>{this.props.title}</p>
            <p><span className="bold">Episode: </span>{this.props.episode}</p>
            <p><span className="bold">Release Date: </span>{this.props.date}</p>
        </div>
    );
  }
}

export default FilmCard;