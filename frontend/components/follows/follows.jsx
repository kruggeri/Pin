import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import FollowContainer from './follow_container';


const Follows = (props) => {

  const followsList = props.location.pathname.split('/');
  const follows = followsList[followsList.length - 1] === "followers" ?
  props.followers : props.followings;

  const followsName = followsList[followsList.length - 1] === "followers" ?
    "Followers" : "Following";


  return (



        <div className="follows-container">
          <div className="follows-header-box">

              <div className="follows-numbers">
                <div className="follows-numbers-num"> {follows.length} </div>
                <div className="follows-name"> {followsName} </div>
              </div>
                <Link to={`/users/${props.user.id}`}>
                  <img className="user-follows-thumbnail" src={props.user.avatar_url}/>
                </Link>
            </div>


        <ul className="follows-list">
      {
        follows.map( (follow) => {
          return (
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
        })
      }
    </ul>
  </div>
  );
};

export default withRouter(Follows);
