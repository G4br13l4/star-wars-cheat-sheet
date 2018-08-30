import React, { Component } from 'react';

class Film extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    createFilmDetail(){
        const templateFilmDetail=(
            <div>
                <h3><span className="bold">Title: </span>{this.props.title}</h3>
                <div className="box-details">
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
            </div>
        );
        this.props.showView(templateFilmDetail);
        this.props.addBread("fourth",this.props.title,templateFilmDetail);
    }

    handleClick(){
        this.createFilmDetail();
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