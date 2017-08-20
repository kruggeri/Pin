import { connect } from 'react-redux';
import { createBoard, fetchBoard } from '../../actions/board_actions';
import BoardsIndexItem from './boards_index_item';

const mapStateToProps = (state) => {
  return ({
    boards: state.user.boards,
    currentUser: state.session.currentUser,
    user: state.user,
  });
};

const mapDispatchToProps = dispatch => ({
  createBoard: (board) => dispatch(createBoard(board)),
  fetchBoard: (id) => dispatch(fetchBoard(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsIndexItem);
