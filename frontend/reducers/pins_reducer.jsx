import { merge, omit } from 'lodash';
import { RECEIVE_ALL_PINS, RECEIVE_SINGLE_PIN, REMOVE_PIN } from '../actions/pin_actions';

const defaultState = {};
const PinsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PINS:
      return action.pins;
    case RECEIVE_SINGLE_PIN:
      return merge({}, state, {[action.pin.id]: action.pin});
    case REMOVE_PIN:
      return omit(state, action.id);
    default:
      return state;
  }
};

export default PinsReducer;
