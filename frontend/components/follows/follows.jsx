import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import FollowContainer from './follow_container';

const FollowLink = ({follow}) => (
  <Link to={`/users/${follow.id}`}>
    <li className="follows-item" key={follow.id}>
      <img className="follows-thumbnail"
        src={follow.avatar_url}
        alt={follow.username}></img>
      <div className="follows-item-username">
        {follow.username}
      </div>
    </li>
  </Link>
);

const FollowsHeaderBox = ({follows, user}) => (
  <div className="follows-header-box">
    <div className="follows-numbers">
      <div className="follows-numbers-num">{follows.length}</div>
      <div className="follows-name">{followsName}</div>
    </div>
    <Link to={`/users/${user.id}`}>
      <img className="user-follows-thumbnail" src={user.avatar_url}/>
    </Link>
  </div>
);

const Follows = ({followers, followings, location, user}) => {
  const followsList = location.pathname.split('/');
  const follows = followsList[followsList.length - 1] === "followers" ?
    followers : followings;
  const followsName = followsList[followsList.length - 1] === "followers" ?
    "Followers" : "Following";

  return (
    <div className="follows-container">
      <FollowsHeaderBox follows={follows} user={user} />

      <ul className="follows-list">
        {follows.map((follow) => <FollowLink follow={follow} key={follow.id} />)}
      </ul>
    </div>
  );
};

export default withRouter(Follows);
