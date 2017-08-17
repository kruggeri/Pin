import { connect } from 'react-redux';
import { close, receiveComponent } from '../../actions/modal_actions';
import Modal from './modal';

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
  component: state.modal.component,
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(close()),
  receiveComponent: (component) => dispatch(receiveComponent(component)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
