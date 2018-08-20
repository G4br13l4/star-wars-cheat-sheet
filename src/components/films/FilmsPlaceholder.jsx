import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FilmCard  from './FilmCard';
import CharCard  from './CharCard';
import BreadCrumb  from '../root/BreadCrumb';

class FilmsPlaceholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData:{},
      prevShow:"",
      show:"",
      style:"h-center",
      film:""
    };
    this.showFilmDetail = this.showFilmDetail.bind(this);
    this.showChar = this.showChar.bind(this);
    this.returnPage = this.returnPage.bind(this);
  }

  componentDidMount() {
    this.showFilms();
  }

  showFilmDetail(film){
    this.setState({film: ` > ${film.props.title}`});
    this.setState({show:film});
    this.setState({style:""});
    this.setState({prevShow:film});
  }

  returnPage(){
    this.setState({show:this.state.prevShow});
  }

  showChar(chars){
    const newChars = chars.map((char) => {
      return(
        <CharCard 
          name={char.name}
        />
      )
    }) 
    this.setState({style:"box-chars"});
    this.setState({show:newChars});
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
            showChar={this.showChar}
            parentMethod={this.showFilmDetail}
            title={film.title}
            episode={film.episode_id}
            date = {film.release_date}
            director={film.director}
            producer={film.producer}
            characters={film.characters}
            synopsis={film.opening_crawl}
          />

        )
      }) 
      this.setState({show:films});
    })
  }
  render() {
    return (
      <div>
        <BreadCrumb
            category="Films"
            link="/films"
            film={this.state.film}
            returnPage={this.returnPage}
        />
        <div className={this.state.style}>
            {this.state.show}
        </div>
      </div>
    );
  }
}

export default FilmsPlaceholder;