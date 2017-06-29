import { merge } from 'lodash';
import { OPEN, CLOSE, RECEIVE_COMPONENT } from '../actions/modal_actions';

const defaultState = {
  isOpen: false,
  component: ""
};

const ModalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN:
      return merge({}, state, {component: action.component, isOpen: true});
    case CLOSE:
      return merge({}, state, {component: "", isOpen: false});
    case RECEIVE_COMPONENT:
      return merge({}, state, { component });
    default:
      return state;
  }
};

export default ModalReducer;
