import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CharCard  from '../root/CharCard';
import BreadCrumb  from '../root/BreadCrumb';
import FilmCard  from '../films/FilmCard';

class PeoplePlaceholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData:{},
      prevCat:"",
      prevShow:"",
      show:"",
      style:"box-chars",
      char:"",
      cat:"People"
    };
    this.showChar = this.showChar.bind(this);
    this.showFilm = this.showFilm.bind(this);
    this.returnItem = this.returnItem.bind(this);
    this.returnCat = this.returnCat.bind(this);
  }

  componentDidMount() {
    this.showChars();
  }

  showChars(){
    fetch('https://swapi.co/api/people')
    .then(results => {
      return results.json();
    }).then(data =>{
      this.setState({rawData:data.results});
      const chars = this.state.rawData.map((char) => { 
        return(
          <CharCard 
            showChar={this.showChar}
            showFilm={this.showFilm}            
            name={char.name}
            species={char.species}
            height={char.height}
            eyes={char.eye_color}
            hair={char.hair_color}
            gender={char.gender}
            birth={char.birth_year}
            films={char.films}
          />
        )
      }) 
      this.setState({show:chars});
      this.setState({prevCat:chars});
    })
  }

  returnItem(){
    this.setState({show:this.state.prevShow});
    this.setState({style:"box-chars"});
  }

  returnCat(){
    this.setState({show:this.state.prevCat});
    this.setState({style:"h-center"});
    this.setState({char:""});
  }

  showChar(char){ //details
    this.setState({char: ` > ${char.props.name}`});
    this.setState({show:char});
    this.setState({prevShow:char});
  }

  showFilm(films){
    const newFilms = films.map((film) => {
      return(
        <FilmCard 
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
    this.setState({style:"h-center"});
    this.setState({show:newFilms});
  }

  render() {
    return (
      <div>
        <BreadCrumb
            category="People"
            prevItem={this.state.char}
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

export default PeoplePlaceholder;