import { merge } from 'lodash';
import { RECEIVE_BOARD, DELETE_BOARD } from '../actions/board_actions';
import { RECEIVE_SINGLE_PIN } from '../actions/pin_actions';

const defaultState = {
  id: 0,
  title: "",
  description: "",
  pins: []
};

const BoardReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_BOARD:
      return merge({}, defaultState, action.board);
    case DELETE_BOARD:
      return defaultState;
    case RECEIVE_SINGLE_PIN:
      newState.pins.push(action.pin);
      return newState; 
    default:
      return state;
  }
};

export default BoardReducer;
