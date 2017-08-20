import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const PinsList = ({pins, followedUsersMap}) => (
  <ul className="board-pin-container">
    {pins.map((pin) => (
      <CreatePinLink pin={pin} pinAuthor={followedUsersMap[pin.user_id]} key={pin.id} />
    ))}
  </ul>
);

const CreatePinLink = ({pin, pinAuthor}) => (
  <Link to={`/pins/${pin.id}`} key={pin.id}>
    <li className="board-show-pins">
      <img src={pin.image_source} />
      <PinDescription pin={pin} pinAuthor={pinAuthor} />
    </li>
  </Link>
);

const PinDescription = ({pin, pinAuthor}) => (
  <div className="pin-description">
    <div className="pin-description-text">{pin.title}</div>
    <PinCredits pinAuthor={pinAuthor} />
  </div>
);

const PinCredits = ({pinAuthor}) => (
  <div className="pin-credits"><div className="pin-credit-wrapper">
    <div className="cred-item">
      <img src={pinAuthor.avatar_url}/>
      <div className="pin-credit-user-wrapper"><div className="author">
        {pinAuthor.username}
      </div></div>
    </div>
  </div></div>
);

const Discovery = ({pins, followedUsersMap}) => (
  <section className="board-show-container">
    <div className="board-header"></div>
    <div className="pins">
      <PinsList pins={pins} followedUsersMap={followedUsersMap} />
    </div>
  </section>
);

export default Discovery;
