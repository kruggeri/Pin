import { merge } from 'lodash';

import {
  RECEIVE_SINGLE_USER,
} from '../actions/profile_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';

const defaultState = {
  displayUser: null,
  boards: []
};

const UsersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_USER:
      const user = action.user;
      return user;
    case RECEIVE_BOARD:
      const newState = merge({}, state);
      newState.boards.push(action.board);
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
