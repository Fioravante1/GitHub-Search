import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Repositories from './pages/Repositories';
import Followers from './pages/Followers';
import Following from './pages/Following';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <Switch>
      <Route component={Login} exact path="/" />
      <Route component={Repositories} exact path="/repositories" />
      <Route component={Followers} exact path="/followers" />
      <Route component={Following} exact path="/following" />
      <Route component={Home} exact path="/home" />
      <Route component={NotFound} />
      <GlobalStyle />
    </Switch>
  );
}

export default App;
