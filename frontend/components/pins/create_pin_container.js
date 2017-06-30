import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import PinCreateForm from './create_pin_form';
import { close } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  board: state.board,
});

const mapDispatchToProps = (dispatch) => ({
  createPin: (pin) => dispatch(createPin(pin)),
  closeModal: () => dispatch(close())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinCreateForm);
