import { values } from 'lodash';
import { connect } from 'react-redux';
import { fetchBoard, deleteBoard } from '../../actions/board_actions';
import { open } from '../../actions/modal_actions';
import { requestSingleUser } from '../../actions/profile_actions';
import BoardShow from './board_show';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.user,
    board: state.board,
    pins: values(state.board.pins),
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
)(BoardShow);
