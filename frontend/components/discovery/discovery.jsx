import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Discovery = (currentUser) => {
  return (<h1>Welcome, {currentUser.username}!</h1>); 
}

export default Discovery;
