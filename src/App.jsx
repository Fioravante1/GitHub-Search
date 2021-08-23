import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Repositories from './pages/Repositories';
import Followers from './pages/Followers';
import Following from './pages/Following';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route component={Login} exact path="/login" />
      <Route component={Repositories} exact path="/repositories" />
      <Route component={Followers} exact path="/followers" />
      <Route component={Following} exact path="/following" />
      <Route component={Home} exact path="/" />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
