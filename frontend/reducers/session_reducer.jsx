import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, nullUser, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      return merge({}, nullUser, {errors: action.errors});
    case CLEAR_ERRORS:
      return merge({}, {currentUser: state.currentUser}, {errors: []});
    default:
      return state;
  }
};

export default SessionReducer;
