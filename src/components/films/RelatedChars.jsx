import React, { Component } from 'react';
import Char  from './Char';

class RelatedChars extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.getChars = this.getChars.bind(this);
    }

    createChars(chars){ 
        const templateChars = chars.map((char) => {
            return(
                <Char
                    name={char.name}
                    type={char.species}
                    height={char.height}
                    eyes={char.eye_color}
                    hair={char.hair_color}
                    gender={char.gender}
                    birthday={char.birth_year}
                    showView={this.props.showView}
                    addBread={this.props.addBread}
                />
            ); 
        })
        this.props.showView(templateChars);
        this.props.addBread("third", "Related Characters",templateChars);
    }

    getChars(){
        let charUrls=this.props.chars;
        let arrayPromises = [];

        charUrls.forEach(function(url) {
            arrayPromises.push(fetch(url).then(response => response.json()));
        });

        //obtaining values of promises
        Promise.all(arrayPromises).then(chars => { 
            this.createChars(chars);
        });    
    }

    handleClick(){
        this.getChars();
    }

    render() {
        return (
            <div className="related-chars">
                <p onClick={this.handleClick}  className="link">Related Characters</p>
                <p>Related Planets</p>
                <p>Related Starships</p>
                <p>Related Vehicles</p>
                <p>Related Species</p>
            </div> 
        );
    }
}
    
export default RelatedChars;