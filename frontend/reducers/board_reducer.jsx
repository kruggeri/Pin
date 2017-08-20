import { merge, concat, omit, reject } from 'lodash';
import { RECEIVE_BOARD, DELETE_BOARD } from '../actions/board_actions';
import { RECEIVE_SINGLE_PIN, REMOVE_PIN } from '../actions/pin_actions';

const defaultState = {
  id: 0,
  title: "",
  description: "",
  pins: {},
};

// TODO: feels weird to have a default parameter come first?
const BoardReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOARD:
      return merge({}, defaultState, action.board);
    case DELETE_BOARD:
      return defaultState;
    case RECEIVE_SINGLE_PIN:
      return merge({}, state, {
        pins: merge({}, state.pins, {[action.pin.id]: action.pin})
      });
    case REMOVE_PIN:
      return merge({}, state, {
        pins: omit(state.pins, action.id)
      });
    default:
      return state;
  }
};

export default BoardReducer;
