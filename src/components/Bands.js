import React, { Component } from 'react';

class Bands extends Component {
  render(){
    const bands = this.props.store.getState().bands.map(band => {
      return <li>{band.name}</li>
    })
    return (
      <div>
        <ul>
         {bands}
        </ul>
      </div>
    );
  }
};

export default Bands;
