import React, { Component, Fragment } from 'react';

const Name = ({ name }) => <h1>Nom: {name}</h1>

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

    //destructuring objet
    const { obj1, obj2 } = { obj1: 'object1', obj2:'object2' };
    console.log(obj1, obj2);
    //destructuring array
    const [ arr1, arr2, ...leReste ] = [ 1, 2, 3, 4, 5 ];
    console.log(arr1, arr2, leReste);

    return (
      <Fragment>
        <Name name={name} />
        <button onClick={this.handleClick}>Click</button>
      </Fragment>
    )
  }
}

export default Class;