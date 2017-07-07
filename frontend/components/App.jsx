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
import BoardShowContainer from './boards/board_show_container';
import ProfileContainer from './profile/profile_container';
import ModalContainer from './modals/modal_container';
import PinShowContainer from './pins/pin_show_container';
import FollowsContainer from './follows/follows_container';

const App = () => (
  <div>

    <ProtectedRoute exact path="/" component={HeaderContainer} />
    <ProtectedRoute path="/boards/:boardId" component={ BoardShowContainer } />
    <ProtectedRoute path="/pins/:id" component={PinShowContainer} />

  <Switch>
    <ProtectedRoute exact path="/users/:userId" component={ProfileContainer} />
    <ProtectedRoute exact path="/users/:userId/followings" component={ FollowsContainer } />
    <ProtectedRoute exact path="/users/:userId/followers" component={ FollowsContainer } />
  </Switch>


    <AuthRoute exact path="/login" component={SessionFormContainer} />
    <AuthRoute exact path="/signup" component={SessionFormContainer} />
    <ModalContainer />
</div>
);

export default App;
