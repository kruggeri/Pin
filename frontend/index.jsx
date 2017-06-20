import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util'
import configureStore from './store/store';
import ReactDom from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // testing
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //

  ReactDOM.render(<Root store={ store}/> , root);
});
