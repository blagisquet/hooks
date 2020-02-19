import React, { Component, Fragment } from 'react';

class Class extends Component {
  state = {
    name: "Brigitte"
  }

  componentDidMount = () => {
    this.setState({ name: 'Baptiste' });
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.name === 'Brigitte') {
      console.log('Update');
    }
  }

  handleClick = () => {
    const name = this.state.name === 'Brigitte' ? 'Baptiste' : 'Brigitte';
    this.setState({ name });
  }
  
  render() {
    const { name } = this.state;
    return (
      <Fragment>
        <h1>Hello {name}</h1>
        <button onClick={this.handleClick}>Click</button>
      </Fragment>
    )
  }
}

export default Class;