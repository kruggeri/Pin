import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import PinCreateForm from './pin_create_form';
import { close } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createPin: (pin) => dispatch(createPin(pin)),
  closeModal: () => dispatch(close())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinCreateForm);
