import React, { Component } from 'react';

class Char extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    createCharDetail(type){
        const templateCharDetail = (
            <div className="char-details">
                <h3><span className="bold">Name: </span>{this.props.name}</h3>
                <div className="box-details">  
                    <p><span className="bold">Species: </span>{type}</p>
                    <p><span className="bold">Height: </span>{this.props.height}</p>
                    <p><span className="bold">Eye color: </span>{this.props.eyes}</p>
                    <p><span className="bold">Hair color: </span>{this.props.hair}</p>
                    <p><span className="bold">Gender: </span>{this.props.gender}</p>
                    <p><span className="bold">Birth year: </span>{this.props.birthday}</p>
                </div>                
            </div>
        );
        this.props.showView(templateCharDetail);
        this.props.addBread("fourth",this.props.name,templateCharDetail);
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