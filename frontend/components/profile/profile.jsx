import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { requestSingleUser, receiveSingleUser } from '../../actions/profile_actions';
import BoardIndexContainer from '../boards/board_index_container';
import { Link } from 'react-router-dom';
import BoardCreateFormContainer from '../boards/board_create_form_container';
import FollowContainer from '../follows/follow_container';


class Profile extends Component {
  constructor(props) {
   super(props);

   this.profileHeader = this.profileHeader.bind(this);
   this.createBoardButton = this.createBoardButton.bind(this);
   this.openModal = this.openModal.bind(this);
 }
  componentDidMount() {
    this.props.requestSingleUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }

  profileHeader() {


    if (this.props.currentUser.id === parseInt(this.props.userId)) {
      return (
        <div className="gear">
          <i className="fa fa-cog" />
        </div>
      );
    } else {
      return (
          <FollowContainer></FollowContainer>
      );
    }
  }

  openModal() {
    this.props.openModal(<BoardCreateFormContainer/>)
  }

  createBoardButton() {

    { if (parseInt(this.props.userId) === this.props.currentUser.id) {
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

  }

  getBoardPins(board, idx) {
    return (board.pins[idx] ? board.pins[idx].image_source : window.images.default_pin)
  }

  getFollows(follows) {
    return(
      Object.keys(follows).length
    )
  }

  render() {
    return(
      <section className="Profile">
        <div className="profile-container">
          <div className="profile-header-bar">
            {this.profileHeader()}
          </div>
          <div className="profile-box-large">
          <div className="profile-box">
              <div className="profile-info">
                <div className="profile-name">
                  <h2> {this.props.user.firstname} &nbsp;
                  {this.props.user.lastname}</h2>
                </div>
              </div>

              <div className="profile-info-right">
                <div className="followers-links">
                  <div className="followers">
                    <Link to={`/users/${this.props.user.id}/followers`} className="user-profile-link">
                      {this.getFollows(this.props.user.followers)} Followers
                    </Link>
                  </div>
                  &nbsp; &nbsp;
                  <div className="following">
                    <Link to={`/users/${this.props.user.id}/followings`} className="user-profile-link">
                      {this.getFollows(this.props.user.followings)} Following
                    </Link>
                  </div>
                </div>

                <div className="location">
                  {this.props.user.location}
                </div>
                <div className="website">
                  <a href={this.props.user.personal_site_url}>{this.props.user.personal_site_url}</a>
                </div>
                <div className="about">
                  {this.props.user.about}
                </div>


              </div>
              <div className="profile-pic-circle">
                <img src={this.props.user.avatar_url}/>
              </div>

            </div>

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
        </div>

          <ul className="board-index-container">



            {this.createBoardButton()}


            { this.props.user.boards.map( (board) => {
              return (
                <Link to={`/boards/${board.id}`} key={board.id}>
                <li className="board-index-item">
                  <div className="board-index-item-container">
                    <div className="board-index-icons">
                      <div className="left-icon-container">
                        <img src={this.getBoardPins(board, 0)}/>
                      </div>

                      <div className="right-icon-container">
                        <div className="right-top-image-container">
                            <img src={this.getBoardPins(board, 1)}/>
                        </div>

                        <div className="right-bottom-image-container">
                            <img src={this.getBoardPins(board, 2)}/>
                        </div>


                      </div>


                    </div>

                    <div className="board-index-title">
                      {board.title}
                    </div>
                  </div>
                </li>
                </Link>
              );
            }
          )
        }
      </ul>
    </div>
  </section>
  )
  }
}

export default Profile;
