import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { requestSinglePin } from '../../actions/pin_actions';

class PinShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestSinglePin(this.props.pinId)
    .then( (pinAction) => this.props.requestSingleUser(pinAction.pin.user_id));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.pinId !== nextProps.match.params.pinId) {
      this.props.requestSinglePin(nextProps.match.params.pinId);
    }
  }

  render() {

    if (this.props.pin) {
      const pin = this.props.pin
      return(
          <div className="pin-show-page">
            <div className="close-up-container">
              <div className="close-up-header">
                <div className="pin-button-container">
                  <button className="pin-it">
                    <img src={window.images.pin} />
                  </button>
                </div>

              </div>

              <div className="pin-show-guts">
                <div className="pin-show-guts-top">
                  <div className="pin-show-image-container">
                    <img className="pin-show-image" src={pin.image_source} />
                  </div>
                </div>

                <div className="pin-show-guts-bottom">

                  <div className="pin-image-url">
                    Saved from <a href={pin.image_url}>{pin.image_url}</a>
                  </div>

                  <div className="post-info">

                    <Link to={`/users/${pin.user_id}`}>
                      <img src={pin.userImage}/>
                    </Link>

                    <div className="pin-info">

                      <div className="pin-info-top">
                        <div className="author-title">
                          saved to <Link to={`/boards/${pin.boardId}`} className="pin-show-board">{pin.boardTitle}</Link>
                        </div>
                      </div>

                      <div className="pin-info-bottom">
                        <div className="pin-show-description">{pin.description}</div>
                        <div className="pin-show-title">{pin.title}</div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default withRouter(PinShow);
