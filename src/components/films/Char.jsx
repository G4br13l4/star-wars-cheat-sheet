import React, { Component } from 'react';

class Char extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    createCharDetail(type,pic){
        const templateCharDetail = (
            <div className="char-details">
                <div className="box-img">
                    <img src={pic}/>
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
            </div>
        );
        this.props.showView(templateCharDetail);
        this.props.addBread("fourth",this.props.name,templateCharDetail);
    }

    getPic(type){
        fetch("https://next.json-generator.com/api/json/get/NJZxmwbvS")
        .then(results => {
            return results.json();
        }).then(data =>{
            let name= this.props.name;
            let pic= data[name].picture;
            this.createCharDetail(type,pic);
        }) 
    }

    getType(){
        fetch(this.props.type[0])
        .then(results => {
            return results.json();
        }).then(data =>{
            this.getPic(data.name);
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