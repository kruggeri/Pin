import { merge, concat, omit } from 'lodash';

import { RECEIVE_SINGLE_USER } from '../actions/profile_actions';
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
      return merge({}, defaultState, action.user);
    case RECEIVE_BOARD:
      return merge({}, state, {boards: concat(state.boards, [action.board])});
    case RECEIVE_FOLLOW:
      return merge({}, state, {
        followed: true,
        followers: merge({}, state.followers, {[action.user.id]: action.user})
      });
    case REMOVE_FOLLOW:
      return merge(omit(
        state, [['followers', action.userId]]
      ), {followed: false});
    default:
      return state;
  }
};

export default UsersReducer;
