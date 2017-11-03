import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props)
    this.state = { text:''}
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({ type: 'ADD_BAND', band: this.state.text
  }).this.setState({ text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <input type="text" value={this.state.text}/>
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default BandInput;
