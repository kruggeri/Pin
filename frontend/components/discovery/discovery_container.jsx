import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Discovery from './discovery';
import { selectUserData } from '../../reducers/selectors';
import { requestSingleUser } from '../../actions/profile_actions';



const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  followings: selectUserData(state.session.currentUser.followings),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discovery);
