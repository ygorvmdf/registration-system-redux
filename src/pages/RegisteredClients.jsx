import React, { Component } from 'react';
import { connect } from 'react-redux';

 class RegisteredClients extends Component {
  showRegisteredClients = () => {
    const clientsNames = JSON.parse(localStorage.getItem('clients'));

    return (
      <ul>
        {clientsNames.map((client, index) => <li key={index}>{client.name}, {client.number}, {client.email}</li>)}
      </ul>
    );
  }

  render() {
    const { loggedIn } = this.props;
    
    return (
      <section>
        <h1>Registered Clients</h1>
        { loggedIn ? this.showRegisteredClients() : <h2>Login não efetuado</h2> }
      </section>
    );
  }
};

const mapStateToProps = (state) => ({
  loggedIn: state.validateReducer.loggedIn,
})

export default connect(mapStateToProps)(RegisteredClients);
