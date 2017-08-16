import * as APIUtil from '../util/profile_api_util';

export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';

export const receiveSingleUser = (user) => ({
  type: RECEIVE_SINGLE_USER,
  user: user
});

export const requestSingleUser = (id) => (dispatch) => {
  return (
    APIUtil.fetchSingleUser(id)
      .then(user => dispatch(receiveSingleUser(user)))
  );
}
