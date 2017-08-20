import { connect } from 'react-redux';
import { values, flatten } from 'lodash';
import { requestSingleUser } from '../../actions/profile_actions';
import { logout } from '../../actions/session_actions';
import Discovery from './discovery';

const mapStateToProps = (state) => {
  const followedUsersMap = state.session.currentUser.followings;
  const followedUsers = values(followedUsersMap);

  return ({
    currentUser: state.session.currentUser,
    followedUsersMap: followedUsersMap,
    pins: flatten(followedUsers.map(user => values(user.pins))),
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discovery);
