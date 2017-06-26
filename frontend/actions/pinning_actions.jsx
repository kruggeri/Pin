import * as APIUtil from '../util/pinning_api_util';
import { receiveBoard } from './board_actions';
import { receiveSinglePin } from './pin_actions';

export const createPinning = (pinning) => (dispatch) => {
  return APIUtil.createPinning(pinning)
  .then(pin => dispatch(receiveSinglePin(pin)));
}

export const deletePinning = (pinning) => (dispatch) => {
  return APIUtil.deletePinning(pinning)
  .then(board => dispatch(receiveBoard(board)));
}; 
