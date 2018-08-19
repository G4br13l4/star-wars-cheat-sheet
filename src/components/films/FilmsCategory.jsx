import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar  from '../root/NavBar';
import BreadCrumb  from '../root/BreadCrumb';
import FilmCard  from './FilmCard';

class FilmsCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData:{},
      films:[], 
      film: ""  
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.showFilms();
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
            title={film.title}
            episode={film.episode_id}
            date = {film.release_date}
            director={film.director}
            producer={film.producer}
            characters={film.characters}
          />

        )
      })    
      this.setState({films:films});
    })
  }

  handleClick(e){
    this.setState({films:""});
    let filmNum = e.target.id;
    var films = this.state.rawData;

    var found = films.find(function(film) {
      return film.episode_id == filmNum;
    });
   
    let showFilm = (
      <div className="film-detail">
        <h3><span className="bold">Title: </span>{found.title}</h3>
        <p><span className="bold">Episode: </span>{found.episode_id}</p>
        <p><span className="bold">Director: </span>{found.director}</p>
        <p><span className="bold">Producer: </span>{found.producer}</p>
        <p><span className="bold">Release Date: </span>{found.release_date}</p>
      </div>
    );
    this.setState({film:showFilm});
  }
  
  render() {
    return (
        <section>
          <NavBar/>
          <BreadCrumb
            category="Films"
          />
          <div className="h-center" onClick={this.handleClick}>
            {this.state.films}
          </div>
          <div className="film-detail">
            {this.state.film}
          </div>
        </section>
    );
  }
}

export default FilmsCategory;
