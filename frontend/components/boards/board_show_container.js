import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, deleteBoard } from '../../actions/board_actions';
import { requestSingleUser } from '../../actions/profile_actions';
import { deletePinning } from '../../actions/pinning_actions';

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
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
  deletePinning: (pinning) => dispatch(deletePinning(pinning))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (BoardShow);
