import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import DiscoveryContainer from './discovery/discovery_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import  HeaderContainer  from './header/header_container';

const App = () => (
  <div>
    <ProtectedRoute exact path="/" component={HeaderContainer} />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    <AuthRoute exact path="/login" component={SessionFormContainer} />
    <AuthRoute exact path="/signup" component={SessionFormContainer} />

</div>
);

export default App;
