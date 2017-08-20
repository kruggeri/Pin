import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import BoardReducer from './board_reducer';
import ModalReducer from './modal_reducer';
import PinsReducer from './pins_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  user: UsersReducer,
  board: BoardReducer,
  modal: ModalReducer,
  pins: PinsReducer,
});

export default rootReducer;
