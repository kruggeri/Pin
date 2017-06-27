import { connect } from 'react-redux';
import { fetchBoard, createBoard } from '../../actions/board_actions';
import BoardsIndexItem from './boards_index_item';

const mapStateToProps = (state) => {
  debugger 
  return ({
    boards: state.user.boards,
    currentUser: state.session.currentUser,
    user: state.user
  });
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: (id) => dispatch(fetchBoard(id)),
  createBoard: (board) => dispatch(createBoard(board))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsIndexItem);
