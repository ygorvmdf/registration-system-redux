import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <header>
        <h1>Home</h1>
        <Link to="/login">Login</Link>
      </header>
    );
  }
}