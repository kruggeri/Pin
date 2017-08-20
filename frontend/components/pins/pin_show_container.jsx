import { connect } from 'react-redux';
import { requestSinglePin, destroyPin } from '../../actions/pin_actions';
import { requestSingleUser } from '../../actions/profile_actions';
import PinShow from './pin_show';

const mapStateToProps = (state, ownProps) => {
  const pinId = ownProps.match.params.id;
  return {
    currentUser: state.session.currentUser,
    user: state.user,
    pinId: pinId,
    pin: state.pins[pinId],
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestSinglePin: (pinId) => dispatch(requestSinglePin(pinId)),
  requestSingleUser: (userId) => dispatch(requestSingleUser(userId)),
  destroyPin: (pinId) => dispatch(destroyPin(pinId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinShow);
