import { values } from 'lodash';
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { requestSingleUser, receiveSingleUser } from '../../actions/profile_actions';
import BoardCreateFormContainer from '../boards/board_create_form_container';
import BoardIndexContainer from '../boards/board_index_container';
import FollowContainer from '../follows/follow_container';

class Profile extends Component {
  constructor(props) {
   super(props);

   this.createBoardButton = this.createBoardButton.bind(this);
   this.openModal = this.openModal.bind(this);
   this.profileHeader = this.profileHeader.bind(this);
 }
  componentDidMount() {
    this.props.requestSingleUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }

  isOwnProfile() {
    return (this.props.currentUser.id === parseInt(this.props.userId));
  }

  profileHeader() {
    if (this.isOwnProfile()) {
      return (
        <div className="gear">
          <i className="fa fa-cog" />
        </div>
      );
    } else {
      return <FollowContainer/>;
    }
  }

  openModal() {
    this.props.openModal(<BoardCreateFormContainer/>)
  }

  createBoardButton() {
    if (this.isOwnProfile()) {
      return (
        <li className="create-board-item">
          <button className="create-board-button" onClick={this.openModal} >
            <div className="plus-icon">
              <img src={window.images.plus}/>
            </div>
          </button>
        </li>
      );
    } else {
      return "";
    }
  }

  getPinImage(board, idx) {
    const boardPins = values(board.pins);
    return (boardPins[idx] ? boardPins[idx].image_source : window.images.default_pin)
  }

  getNumFollows(follows) {
    return(
      Object.keys(follows).length
    )
  }

  followerLinks() {
    return (
      <div className="followers-links">
        <div className="followers">
          <Link to={`/users/${this.props.user.id}/followers`} className="user-profile-link">
            {this.getNumFollows(this.props.user.followers)} Followers
          </Link>
        </div>
        &nbsp; &nbsp;
        <div className="following">
          <Link to={`/users/${this.props.user.id}/followings`} className="user-profile-link">
            {this.getNumFollows(this.props.user.followings)} Following
          </Link>
        </div>
      </div>
    );
  }

  profileBox() {
    return (
      <div className="profile-box">
        <div className="profile-info">
          <div className="profile-name">
            <h2>{this.props.user.firstname} {this.props.user.lastname}</h2>
          </div>
        </div>

        <div className="profile-info-right">
          {this.followerLinks()};

          <div className="location">{this.props.user.location}</div>
          <div className="website">
            <a href={this.props.user.personal_site_url}>{this.props.user.personal_site_url}</a>
          </div>
          <div className="about">{this.props.user.about}</div>
        </div>

        <div className="profile-pic-circle">
          <img src={this.props.user.avatar_url}/>
        </div>
      </div>
    );
  }

  profileButtons() {
    return (
      <div className="profile-buttons">
        <div className="boards-button">
          <Link to={`/users/${this.props.user.id}`} className="user-profile-link">
            {this.props.user.boards.length} Boards
          </Link>
        </div>

        <div className="pins-button">
          <Link to={`/users/${this.props.user.id}/pins`} className="user-profile-link">
            {this.props.user.pins.length} Pins
          </Link>
        </div>
      </div>
    );
  }

  boardIndexIcon(board, index) {
    let divClass
    if (index === 0) {
      divClass = "left-icon-container";
    } else if (index === 1) {
      divClass = "right-top-image-container";
    } else if (index === 2) {
      divClass = "right-bottom-image-container";
    }

    return (
      <div className={divClass}>
        <img src={this.getPinImage(board, index)}/>
      </div>
    );
  }

  boardIndexIcons(board) {
    return (
      <div className="board-index-icons">
        {this.boardIndexIcon(board, 0)}

        <div className="right-icon-container">
          {this.boardIndexIcon(board, 1)}
          {this.boardIndexIcon(board, 2)}
        </div>
      </div>
    )
  }

  renderBoard(board) {
    return (
      <Link to={`/boards/${board.id}`} key={board.id}>
      <li className="board-index-item">
        <div className="board-index-item-container">
          {this.boardIndexIcons(board)}
          <div className="board-index-title">{board.title}</div>
        </div>
      </li>
      </Link>
    );
  }

  render() {
    return (
      <section className="Profile">
        <div className="profile-container">
          <div className="profile-header-bar">
            {this.profileHeader()}
          </div>
          <div className="profile-box-large">
            {this.profileBox()}
            {this.profileButtons()}
          </div>

          <ul className="board-index-container">
            {this.createBoardButton()}
            {this.props.user.boards.map(board => this.renderBoard(board))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Profile;
