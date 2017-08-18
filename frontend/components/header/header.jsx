import React from 'react';
import {Link, Route} from 'react-router-dom';
import ProfileContainer from '../profile/profile_container';

const HeaderIcon = () => (
  <Link className="header-link-icon" to={`/home`}>
    <div className="header-icon">
      <img src={window.images.pin_icon_small} />
    </div>
  </Link>
);

const LogOutContainer = ({logout}) => (
  <div className="logout-container">
    <button className="logout-button" onClick={logout}>
      Sign Out
    </button>
  </div>
);

const ProfileLink = ({currentUser}) => (
  <div className="profile-link">
    <Link className="profile-link-icon" to={`/users/${currentUser.id}`}>
      <img src={window.images.user_icon} />
    </Link>
  </div>
);

const Header = ({logout, currentUser}) => {
  return (
    <div className="header-container">
      <div className="header">
        <HeaderIcon />
        <div className="center-nav">  </div>
        <div className="right-nav">
          <LogOutContainer logout={logout} />
          <ProfileLink currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default Header;
