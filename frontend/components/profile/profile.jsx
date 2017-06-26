import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { requestSingleUser, receiveSingleUser } from '../../actions/profile_actions';

class Profile extends Component {
  constructor(props) {
   super(props);

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

  profileHeader() {

    if (this.props.currentUser.id === this.props.user.id) {
      return (
        <div className="gear">
          <i className="fa fa-cog" />
        </div>
      );
    } else {
      return (
        <input className="follow-button" type="button" onClick="" value="Follow" />
      );
    }
  }


  render() {
    return(
      <section className="Profile">
        <div className="profile-header-bar">
          {this.profileHeader()}
        </div>
        <div className="profile-container">
          <div className="profile-box">
            <div className="profile-info">
              <div className="profile-name">
                <h2> {this.props.user.firstname} &nbsp;
                {this.props.user.lastname}</h2>
              </div>
            </div>

            <div className="profile-into-right">
              <div className="followers-links">
                <div className="followers">Followers</div>
                &nbsp; &nbsp;
                <div className="following">Following</div>
              </div>

              <div className="location">
                {this.props.user.location}
              </div>
              <div className="website">
                {this.props.user.personal_site_url}
              </div>
              <div className="about">
                {this.props.user.about}
              </div>


            </div>
            <div className="profile-pic-circle">
              <img src={this.props.user.avatar_url}/>
            </div>

          </div>
        </div>
      </section>
    )

  }

}

export default Profile;
