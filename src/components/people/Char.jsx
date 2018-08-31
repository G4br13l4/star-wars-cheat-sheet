import React, { Component } from 'react';
import RelatedFilms  from './RelatedFilms';

class Char extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    createCharDetail(type){
        const templateCharDetail = (
            <div className="char-details">
                <div className="box-img">
                    <img src="https://secure.img1-fg.wfcdn.com/im/99586765/resize-h400-p1-w400%5Ecompr-r85/1717/17178453/Star+Wars+Luke+Skywalker+Cutout+Wall+Decal.jpg"/>
                </div>
                <div className="box-details txt-center">
                    <h3><span className="bold">Name: </span>{this.props.name}</h3>
                    <p><span className="bold">Species: </span>{type}</p>
                    <p><span className="bold">Height: </span>{this.props.height}</p>
                    <p><span className="bold">Eye color: </span>{this.props.eyes}</p>
                    <p><span className="bold">Hair color: </span>{this.props.hair}</p>
                    <p><span className="bold">Gender: </span>{this.props.gender}</p>
                    <p><span className="bold">Birth year: </span>{this.props.birthday}</p>
                </div> 
                <RelatedFilms   
                    films={this.props.films}
                    showView={this.props.showView}
                    addBread={this.props.addBread}
                />
            </div>
        );
        this.props.showView(templateCharDetail);
        this.props.addBread("second", this.props.name,templateCharDetail);//add for breadcrumb
    }

    getType(){
        fetch(this.props.type[0])
        .then(results => {
            return results.json();
        }).then(data =>{
            this.createCharDetail(data.name);
        }) 
    }

    handleClick(){
        this.getType();
    }

    render() {
        return (
            <div className="char" onClick={this.handleClick}>
                <h4>{this.props.name}</h4>
            </div>
        );
    }
}
    
export default Char;