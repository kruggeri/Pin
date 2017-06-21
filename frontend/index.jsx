import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util'
import configureStore from './store/store';
import ReactDom from 'react-dom';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  let store;
    window.logout = logout;

  if (window.currentUser) {
     const preloadedState = { session: { currentUser: window.currentUser } };
     store = configureStore(preloadedState);
     delete window.currentUser;
   } else {
     store = configureStore();
   }
   const root = document.getElementById('root');
   ReactDOM.render(<Root store={store} />, root);
 });

//
// document.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementById('root');
//   const store = configureStore();
//
//   // testing
//   window.login = login;
//   window.signup = signup;
//   window.getState = store.getState;
//   window.dispatch = store.dispatch;
//   //
//
//   ReactDOM.render(<Root store={ store}/> , root);
// });
