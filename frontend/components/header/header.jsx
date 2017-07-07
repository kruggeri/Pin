import React from 'react';
import { Link, Route } from 'react-router-dom';
import ProfileContainer from '../profile/profile_container';


const Header = ({logout, currentUser}) => {

  return (
    <div className="header-container">
      <div className="header">
        <Link className="header-link-icon" to={`/home`}>
          <div className="header-icon">

          <img src={window.images.pin_icon_small} />
          </div>

        </Link>

      <div className="center-nav">  </div>

      <div className="right-nav">
        <div className="logout-container">
          <button className="logout-button" onClick={logout}>

            Sign Out
          </button>

        </div>


        <div className="profile-link">
          <Link className="profile-link-icon" to={`/users/${currentUser.id}`}>
            <img src={window.images.user_icon} />
          </Link>
        </div>
      </div>

    </div>

    </div>
  );
}

export default Header;
