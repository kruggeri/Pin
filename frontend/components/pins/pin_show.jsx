import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {requestSinglePin} from '../../actions/pin_actions';

class PinShow extends React.Component {
  constructor(props) {
    super(props);

    this.deleteButton = this.deleteButton.bind(this);
  }

  fetchData(pinId) {
    this.props.requestSinglePin(pinId)
      .then((pinAction) => this.props.requestSingleUser(pinAction.pin.user_id));
  }

  componentDidMount() {
    this.fetchData(this.props.pinId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.pinId !== nextProps.pinId) {
      this.fetchData(nextProps.pinId);
    }
  }

  deleteButton() {
    const {pin, currentUser, destroyPin} = this.props;
    if (parseInt(pin.user_id) != currentUser.id) {
      return <div />;
    }

    const clickHandler = () => destroyPin(pin.id).then(() => this.goBack(pin.board_id));
    console.log(pin);
    return (
      <button className="delete-pin" onClick={clickHandler}>
        <img src={window.images.delete_icon} />
      </button>
    );
  }

  goBack(boardId) {
    debugger;
    this.props.history.push(`/boards/${boardId}`);
  }

  dismissModal(e) {
    e.preventDefault();
    const {pin} = this.props;
    // if clicking outside image, send user back
    if (e.target.getAttribute("class") === "pin-show-page") {
      this.goBack(pin.board_id);
    };
  }

  closeUpHeader() {
    return (
      <div className="close-up-header">
        <div className="pin-button-container">
          <button className="pin-it">
            <img src={window.images.pin} />
          </button>
        </div>

        <div>{this.deleteButton()}</div>
      </div>
    );
  }

  pinInfo() {
    const {pin} = this.props;
    const pinLink = (
      <Link to={`/boards/${pin.board_id}`} className="pin-show-board">
        {pin.board_title}
      </Link>
    );

    return (
      <div className="pin-info">
        <div className="pin-info-top">
          <div className="author-title">saved to {pinLink}</div>
        </div>

        <div className="pin-info-bottom">
          <div className="pin-show-description">{pin.description}</div>
          <div className="pin-show-title">{pin.title}</div>
        </div>
      </div>
    );
  }

  pinShowGutsTop() {
    const {pin} = this.props;
    return (
      <div className="pin-show-guts-top">
        <div className="pin-show-image-container">
          <img className="pin-show-image" src={pin.image_source} />
        </div>
      </div>
    );
  }

  pinShowGutsBottom() {
    const {pin} = this.props;
    return (
      <div className="pin-show-guts-bottom">
        <div className="pin-image-url">
          Saved from <a href={pin.image_url}>{pin.image_url}</a>
        </div>

        <div className="post-info">
          <Link to={`/users/${pin.user_id}`}>
            <img src={pin.userImage}/>
          </Link>

          {this.pinInfo()}
        </div>
      </div>
    );
  }

  pinShowGuts() {
    const {pin} = this.props;
    return (
      <div className="pin-show-guts">
        {this.pinShowGutsTop()}
        {this.pinShowGutsBottom()}
      </div>
    );
  }

  render() {
    if (!this.props.pin) {
      return null;
    }

    return (
      <div className="pin-show-page" onClick={(e) => this.dismissModal(e)}>
        <div className="close-up-container">
          {this.closeUpHeader()}
          {this.pinShowGuts()}
        </div>
      </div>
    );
  }
}

export default withRouter(PinShow);
