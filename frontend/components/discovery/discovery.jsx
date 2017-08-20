import React from 'react';
import {Link, withRouter} from 'react-router-dom'

const FollowsPins = ({followings}) => (
  <div>
    {followings.map((follow) => (
      <FollowPins follow={follow} />
    ))}
  </div>
);

const FollowPins = ({follow}) => (
  <div>
    {Object.values(follow.pins).map((pin) => (
      <CreatePinLink pin={pin} follow={follow} />
    ))}
  </div>
);

const CreatePinLink = ({pin, follow}) => (
  <Link to={`/pins/${pin.id}`} key={pin.id}>
    <li className="board-show-pins">
      <img src={pin.image_source} />
      <PinDescription pin={pin} follow={follow} />
    </li>
  </Link>
);

const PinDescription = ({pin, follow}) => (
  <div className="pin-description">
    <div className="pin-description-text">{pin.title}</div>
    <PinCredits follow={follow} />
  </div>
);

const PinCredits = ({follow}) => (
  <div className="pin-credits"><div className="pin-credit-wrapper">
    <div className="cred-item">
      <img src={follow.avatar_url}/>
      <div className="pin-credit-user-wrapper"><div className="author">
        {follow.username}
      </div></div>
    </div>
  </div></div>
);

const Discovery = ({followings}) => (
  <section className="board-show-container">
    <div className="board-header"></div>
    <div className="pins">
      <ul className="board-pin-container">
        <FollowsPins followings={followings} />
      </ul>
    </div>
  </section>
);

export default Discovery;
