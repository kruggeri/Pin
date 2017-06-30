import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, deleteBoard, receiveBoard } from '../../actions/board_actions';
import { requestSingleUser } from '../../actions/profile_actions';
import { open } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.user,
    board: state.board,
    pins: state.board.pins,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchBoard: (board) => dispatch(fetchBoard(board)),
  requestSingleUser: (userId) => dispatch(requestSingleUser(userId)),
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
  openModal: (component) => dispatch(open(component)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (BoardShow);
