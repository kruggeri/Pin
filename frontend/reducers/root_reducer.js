import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import BoardReducer from './board_reducer'

const rootReducer = combineReducers({
  session: SessionReducer,
  user: UsersReducer,
  board: BoardReducer, 
});

export default rootReducer;
