import * as APIUtil from "../util/follow_api_util";

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveFollow = (user) => ({
  type: RECEIVE_FOLLOW,
  user: user
});

export const removeFollow = (userId) => ({
  type: REMOVE_FOLLOW,
  userId: userId,
});

export const createFollow = (follow) => (dispatch) => {
  return (
    APIUtil.createFollow(follow)
      .then(user => dispatch(receiveFollow(user)))
  );
};

export const deleteFollow = (follow) => (dispatch) => {
  return (
    APIUtil.deleteFollow(follow)
      .then(follow => dispatch(removeFollow(follow.follower_id)))
  );
};
