export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";

import * as APIUtil from '../util/profile_api_util';

export const requestSingleUser = (id) => (dispatch) => {
  return APIUtil.fetchSingleUser(id)
    .then(user => {
      dispatch(receiveSingleUser(user));
      return user;
    });
}

export const receiveSingleUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user: user
});
