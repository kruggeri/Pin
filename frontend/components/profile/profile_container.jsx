import { connect } from 'react-redux';
import { flatten, values } from 'lodash';
import { open } from '../../actions/modal_actions';
import { requestSingleUser } from '../../actions/profile_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    user: state.user,
    currentUser: state.session.currentUser,
    pins: flatten(state.user.boards.map(board => values(board.pins))),
  };
};

const mapDispatchToProps = dispatch => ({
  requestSingleUser: (id) => dispatch(requestSingleUser(id)),
  openModal: (component) => dispatch(open(component))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
