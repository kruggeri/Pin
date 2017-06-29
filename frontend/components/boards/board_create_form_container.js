import { connect } from 'react-redux';
import { createBoard} from '../../actions/board_actions';
import BoardCreateForm from './board_create_form';
import { close } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createBoard: (board) => dispatch(createBoard(board)),
  closeModal: () => dispatch(close())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCreateForm);
