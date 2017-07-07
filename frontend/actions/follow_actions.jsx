import * as APIUtil from "../util/follow_api_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveFollow = user => ({
  type: RECEIVE_FOLLOW,
  user: user
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow: follow 
});

export const createFollow = (follow) => dispatch => {
  return (
    APIUtil.createFollow(follow)
    .then( user => dispatch(receiveFollow(user)))
  );
};

export const deleteFollow = (follow) => dispatch => {
  return (
    APIUtil.deleteFollow(follow)
    .then(removedFollow => dispatch(removeFollow(removedFollow)))
  );
};
