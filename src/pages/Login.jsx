import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { validUser } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { validUser } = this.props;
    const { userName, password } = this.state;
    const users = JSON.parse(localStorage.getItem('users'));

    if (users && users[userName]  === password) {
      validUser(true);
      return;
    }
    alert('Invalid username and/or password');
  }

  render() {
    const { loggedIn } = this.props;

    return (
      <section>
        <h1>Login Page</h1>
        <form>
          <input onChange={(e) => this.setState({ userName: e.target.value }) } type="text" />
          <input onChange={(e) => this.setState({ password: e.target.value }) } type="password" />
          <button onClick={this.handleLogin} type="submit">log in</button>
        </form>
        {loggedIn && <Redirect to="/registeredclients" />}
      </section>
    );
  }
};

const mapStateToProps = (state) => ({
  loggedIn: state.validateReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  validUser: (value) => dispatch(validUser(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
