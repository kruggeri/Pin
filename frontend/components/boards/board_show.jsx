import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import PinCreateFormContainer from '../pins/create_pin_container';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId)
      .then(() => this.props.requestSingleUser(this.props.board.user_id));
  }

  openModal() {
    this.props.openModal(<PinCreateFormContainer/>)
  }

  createPinButton() {
    if (this.props.user.id != this.props.currentUser.id) {
      return "";
    }

    return (
      <li className="create-pin">
        <button className="create-board-button" onClick={this.openModal}>
          <div className="plus-icon">
            <img src={window.images.plus}/>
          </div>
        </button>
      </li>
    );
  }

  pinCredits(pin) {
    const {user, board} = this.props;
    return (
      <div className="pin-credits"><div className="pin-credit-wrapper">
        <div className="cred-item">
          <img src={user.avatar_url}/>
          <div className="pin-credit-user-wrapper">
            <div className="author">{user.username}</div>
            <div className="board-name">{board.title}</div>
          </div>
        </div>
      </div></div>
    );
  }

  pinLink(pin) {
    return (
      <Link to={`/pins/${pin.id}`} key={pin.id}>
        <li className="board-show-pins">
          <img src={pin.image_source}/>

          <div className="pin-description">
            <div className="pin-description-text">{pin.title}</div>
            {this.pinCredits(pin)}
          </div>
        </li>
      </Link>
    );
  }

  pinCount() {
    const {pins} = this.props;
    return (
      <div className="board-show-pin-count">
        <div className="pin-number">{pins.length}</div>
        <div className="pin-number-const">PINS</div>
      </div>
    );
  }

  profilePic() {
    const {user} = this.props;
    return (
      <div className="profile-pic"><div className="profile-circle">
        <Link to={`/users/${user.id}`}>
          <img src={user.avatar_url}/>
        </Link>
      </div></div>
    );
  }

  boardHeader() {
    const {board} = this.props;
    return (
      <div className="board-header"><div className="boarder-header-wrapper">
        <div className="board-show-title">{board.title}</div>
        <div className="board-show-description">{board.description}</div>

        <div className="board-show-info">
          {this.pinCount()}
          {this.profilePic()}
        </div>
      </div></div>
    );
  }

  render() {
    if (!this.props.board) {
      return <div></div>
    }
    const {pins} = this.props;

    return (
      <section className="board-show-container">
        {this.boardHeader()}

        <div className="pins">
          <ul className="board-pin-container">
            {this.createPinButton()}
            {pins.map((pin) => this.pinLink(pin))}
          </ul>
        </div>
      </section>
    );
  }
};

export default withRouter(BoardShow);
