import React, { Component } from 'react';
import saveOnLocalStorage from '../services/handleLocalStorage';

export default class RegisterClient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      number: 0,
      email: '',
    }
  }

  handleInput = ({ target }) => {
    this.setState({
      [target.id]: target.value,
    })
  }

  fromStateToLocalStorage = () => {
    const { name, number, email } = this.state;

    saveOnLocalStorage({name, number, email});
  }

  render() {
    return (
      <section>
        <h1>Register client</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={this.handleInput} id="name" type="text" />
          <label htmlFor="number">Number</label>
          <input onChange={this.handleInput} id="number" type="number" />
          <label htmlFor="email">Email</label>
          <input onChange={this.handleInput} id="email" type="email" />
        </div>
        <button onClick={this.fromStateToLocalStorage}>Cadastrar</button>
      </section>
    );
  }
};
