import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FilmCard  from './FilmCard';

class FilmsPlaceholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData:{},
      show:"",
      style:"h-center"
    };

    this.showFilmDetail = this.showFilmDetail.bind(this)
  }

  componentDidMount() {
    this.showFilms();
  }

  showFilmDetail(film){
    this.setState({show:film});
    this.changeStyle();
  }

  changeStyle(){
    this.setState({style:""});
  }

  showFilms(){
    fetch('https://swapi.co/api/films')
    .then(results => {
      return results.json();
    }).then(data =>{
      this.setState({rawData:data.results});
      const films = this.state.rawData.map((film) => {
        return(
          <FilmCard 
            showFilm={this.showFilmDetail}
            parentMethod={this.showFilmDetail}
            title={film.title}
            episode={film.episode_id}
            date = {film.release_date}
            director={film.director}
            producer={film.producer}
            characters={film.characters}
          />

        )
      })    
      this.setState({show:films});
    })
  }
  render() {
    return (
      <div className={this.state.style}>
        {this.state.show}
      </div>
    );
  }
}

export default FilmsPlaceholder;