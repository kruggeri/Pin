import React from 'react';
import { Link } from 'react-router-dom';



const Header = ({logout, currentUser}) => {

  return (
    <div className="header">
      <div className="header-icon">
        <img src={window.images.pin_icon_small} />
      </div>
      <div className="logout-button">
        <button className="logout-button" onClick={logout}>Log out</button>
      </div>
      <div className="profile-link">
        <Link to={`/users/${currentUser.id}`}>Profile Link</Link>
      </div>
    </div>
  );
}

export default Header;
