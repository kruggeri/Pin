import { connect } from 'react-redux';
import { createBoard} from '../../actions/board_actions';
import { close } from '../../actions/modal_actions';
import BoardCreateForm from './board_create_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(close()),
  createBoard: (board) => dispatch(createBoard(board)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCreateForm);
