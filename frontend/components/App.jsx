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

const App = () => (
  <div>
    <Route exact path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;

// <header>
//   <h1>Pin App</h1>
//   // <DiscoveryContainer />
// </header>
