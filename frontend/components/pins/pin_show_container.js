
import { connect } from 'react-redux';
import PinShow from './pin_show';
import { requestAllPins, createPin, receiveAllPins } from '../../actions/pin_actions';
import { requestSinglePin } from '../../actions/pin_actions';
import { requestSingleUser } from '../../actions/profile_actions';



const mapStateToProps = (state, ownProps) => {
  const pinId = ownProps.match.params.id;
  return ({
    currentUser: state.session.currentUser,
    user: state.user,
    pinId: pinId,
    pin: state.pins[pinId],
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestSinglePin: (pinId) => dispatch(requestSinglePin(pinId)),
  requestSingleUser: (userId) => dispatch(requestSingleUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinShow);
