import React, { Component } from 'react';
import RelatedChars  from './RelatedChars';

class Film extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    createFilmDetail(){
        const templateFilmDetail=(
            <div className="film-details">
                <h3><span className="bold">Title: </span>{this.props.title}</h3>
                <div>
                    <div className="small-details">
                        <p><span className="bold">Episode: </span>{this.props.episode}</p>
                        <p><span className="bold">Director: </span>{this.props.director}</p>
                        <p><span className="bold">Producer: </span>{this.props.producer}</p>
                        <p><span className="bold">Release Date: </span>{this.props.date}</p>
                    </div>
                    <div className="large-detail">
                        <p><span className="bold">Synopsis: </span>{this.props.synopsis}</p>
                    </div>
                </div>
                <RelatedChars   
                    chars={this.props.chars}
                    showView={this.props.showView}
                    addBread={this.props.addBread}
                />
            </div>
        );
        this.props.showView(templateFilmDetail);
        this.props.addBread("second", this.props.title,templateFilmDetail);//add for breadcrumb
    }

    handleClick(){
        this.createFilmDetail(this.props.title);
    }

    render() {
        return (
            <div className="film-card" onClick={this.handleClick}>
                <div>
                    <p><span className="bold">Title: </span>{this.props.title}</p>
                    <p><span className="bold">Episode: </span>{this.props.episode}</p>
                    <p><span className="bold">Release Date: </span>{this.props.date}</p>
                </div>  
            </div>
        );
    }
}
    
export default Film;