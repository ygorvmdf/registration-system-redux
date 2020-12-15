import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, RegisteredClients, RegisterClient, Login } from './pages';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/registeredclients" component={RegisteredClients}/>
        <Route path="/registerclient" component={RegisterClient}/>
      </Switch>
    )
  }
}

