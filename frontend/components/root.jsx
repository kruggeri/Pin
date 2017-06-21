import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <Route path="/" component={App}/>
    </HashRouter>
  </Provider>
);

export default Root;
