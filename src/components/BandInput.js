import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super()
    this.state = { bands: ''}
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({ type: 'ADD_BAND', bands: this.state })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <input type="text"/>
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default BandInput;
