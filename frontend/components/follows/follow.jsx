import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.followButton = this.followButton.bind(this);
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }

  follow(e) {
    e.preventDefault();
    let currentUserId = this.props.currentUser.id;
    let userId = this.props.user.id;
    let follow = {follower_id: currentUserId, following_id: userId};
    this.props.createFollow(follow);
  }

  unfollow(e) {
    e.preventDefault();
    let currentUserId = this.props.currentUser.id;
    let userId = this.props.user.id;
    let follow = {follower_id: currentUserId, following_id: userId};
    this.props.deleteFollow(follow);
  }

  followButton() {
    if(this.props.currentUser.id !== this.props.user.id) {
      if(this.props.user.followed){
        return (
          <button className="follow-button"
                  onClick={this.unfollow}>
            Unfollow
          </button>
        );
      } else {
        return (
          <button className="follow-button"
                  onClick={this.follow}>
            Follow
          </button>
        );
      }
    }
  }

  render() {
    return (
      <div>
        {this.followButton()}
      </div>
    );
  }
}
export default Follow;
