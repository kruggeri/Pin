import { connect } from 'react-redux';
import Profile from './profile';
import { requestSingleUser } from '../../actions/profile_actions';

const mapStateToProps = (state, ownProps) => {
  return { userId: ownProps.match.params.userId,
            user: state.user,
            currentUser: state.session.currentUser
            }
};

const mapDispatchToProps = dispatch => ({
  requestSingleUser: id => dispatch(requestSingleUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
