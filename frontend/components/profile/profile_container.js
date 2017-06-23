import { connect } from 'react-redux';
import Profile from './profile';
import { requestSingleUser } from '../../actions/profile_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return { userId: ownProps.match.params.userId,
  user: state.user }
};

const mapDispatchToProps = dispatch => ({
  requestSingleUser: id => dispatch(requestSingleUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
