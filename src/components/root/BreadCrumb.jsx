import React, { Component } from 'react';

class Breadcrumb extends Component {

  render() {
    return (
      <div className="breadcrumb bold">
        <p>
          <span onClick={this.props.showBread} data-place="first" className="link">{this.props.first}</span>
          <span onClick={this.props.showBread} data-place="second" className="link">{this.props.second}</span>
          <span onClick={this.props.showBread} data-place="third" className="link">{this.props.third}</span>
          <span>{this.props.fourth}</span>
        </p>
      </div>
    );
  }
}

export default Breadcrumb;
