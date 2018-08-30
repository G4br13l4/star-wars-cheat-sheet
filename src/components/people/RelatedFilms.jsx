import React, { Component } from 'react';
import Film  from './Film';

class RelatedFilms extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.getFilms = this.getFilms.bind(this);
    }

    createFilms(films){ 
        const templateFilms = films.map((film) => {
            return(
                <Film 
                    title={film.title}
                    episode={film.episode_id}
                    date={film.release_date}
                    director={film.director}
                    producer={film.producer}
                    synopsis={film.opening_crawl}
                    showView={this.props.showView}
                    addBread={this.props.addBread}
                />
            ); 
        })
        this.props.showView(templateFilms);
        this.props.addBread("third", "Related Films",templateFilms);
    }

    getFilms(){
        let filmUrls=this.props.films;
        let arrayPromises = [];

        filmUrls.forEach(function(url) {
            arrayPromises.push(fetch(url).then(response => response.json()));
        });

        //obtaining values of promises
        Promise.all(arrayPromises).then(films => { 
            this.createFilms(films);
        });    
    }

    handleClick(){
        this.getFilms();
    }

    render() {
        return (
            <div className="related-details">
                <p onClick={this.handleClick}  className="link">Related Films</p>
                <p>Related Planets</p>
                <p>Related Starships</p>
                <p>Related Vehicles</p>
                <p>Related Species</p>
            </div> 
        );
    }
}
    
export default RelatedFilms;