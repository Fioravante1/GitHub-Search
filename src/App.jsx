import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Repositories from './pages/Repositories';
import FollowersFollowing from './pages/FollowersFollowing';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route component={Login} exact path="/" />
      <Route component={Repositories} exact path="/repositories" />
      <Route component={FollowersFollowing} exact path="/followers" />
      <Route component={FollowersFollowing} exact path="/following" />
      <Route component={Home} exact path="/followers/user" />
      <Route component={Home} exact path="/following/user" />
      <Route component={Home} exact path="/home" />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
