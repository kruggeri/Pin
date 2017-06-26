import merge from 'lodash-merge';
import { RECEIVE_BOARD, DELETE_BOARD } from '../actions/board_actions'

const defaultState = () => ({
  id: 0,
  title: "",
  description: "",
  pins: []
});

const BoardReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOARD:
      return merge({}, defaultState, action.board);
    case DELETE_BOARD:
      return defaultState;
    default:
      return state;
  }
};

export default BoardReducer;
