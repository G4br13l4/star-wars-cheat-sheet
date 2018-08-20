import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FilmCard  from './FilmCard';
import CharCard  from '../root/CharCard';
import BreadCrumb  from '../root/BreadCrumb';

class FilmsPlaceholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData:{},
      prevCat:"",
      prevShow:"",
      show:"",
      style:"h-center",
      film:"",
      cat:"Films"
    };
    this.showFilmDetail = this.showFilmDetail.bind(this);
    this.showChar = this.showChar.bind(this);
    this.returnItem = this.returnItem.bind(this);
    this.returnCat = this.returnCat.bind(this);
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

  returnItem(){
    this.setState({show:this.state.prevShow});
    this.setState({style:""});
    this.setState({show:this.state.prevShow});
  }

  returnCat(){
    this.setState({show:this.state.prevCat});
    this.setState({style:"h-center"});
    this.setState({film:""});
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
      this.setState({prevCat:films});
    })
  }
  render() {
    return (
      <div>
        <BreadCrumb
            category="Films"
            prevItem={this.state.film}
            prevCat={this.state.cat}
            returnCat={this.returnCat}
            returnItem={this.returnItem}
        />
        <div className={this.state.style}>
            {this.state.show}
        </div>
      </div>
    );
  }
}

export default FilmsPlaceholder;