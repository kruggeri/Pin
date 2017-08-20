import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Follow extends React.Component {
  constructor(props) {
    super(props);

    this.followButton = this.followButton.bind(this);
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }

  follow(e) {
    e.preventDefault();
    const currentUserId = this.props.currentUser.id;
    const userId = this.props.user.id;
    const follow = {follower_id: currentUserId, following_id: userId};
    this.props.createFollow(follow);
  }

  unfollow(e) {
    e.preventDefault();
    const currentUserId = this.props.currentUser.id;
    const userId = this.props.user.id;
    const follow = {follower_id: currentUserId, following_id: userId};
    this.props.deleteFollow(follow);
  }

  followButton() {
    if (this.props.currentUser.id === this.props.user.id) {
      return null;
    }

    if (this.props.user.followed) {
      return (
        <button className="follow-button" onClick={this.unfollow}>
          Unfollow
        </button>
      );
    } else {
      return (
        <button className="follow-button" onClick={this.follow}>
          Follow
        </button>
      );
    }
  }

  render() {
    return <div>{this.followButton()}</div>;
  }
}

export default Follow;
