import { merge } from 'lodash';

import {
  RECEIVE_SINGLE_USER,
} from '../actions/profile_actions';

const defaultState = () => ({
  displayUser: null,
});

const UsersReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_USER:
      const user = action.user;
      return user; 
    default:
      return state;
  }
};

export default UsersReducer;
