import { merge } from 'lodash';

import {
  RECEIVE_SINGLE_USER,
} from '../actions/profile_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const defaultState = {
  id: null,
  username: "",
  description: "",
  image_url: null,
  boards: [],
  pins: [],
  followed: false,
  followers: {},
  followings: {},
};


const UsersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_USER:
      let newState = merge({}, defaultState, action.user);
      return newState;
    case RECEIVE_BOARD:
      newState = merge({}, defaultState);
      newState.boards.push(action.board);
      return newState;
    case RECEIVE_FOLLOW:
      newState = merge({}, state, { followed: true } );
      newState.followers[action.user.user_id] = action.user;
      return newState;
    case REMOVE_FOLLOW:
      newState = merge({}, state, { followed: false } );
      delete newState.followers[action.follow.follower_id];
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
