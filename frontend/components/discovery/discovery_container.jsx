import { connect } from 'react-redux';
import { values } from 'lodash'; 
import { requestSingleUser } from '../../actions/profile_actions';
import { logout } from '../../actions/session_actions';
import { selectUserData } from '../../reducers/selectors';
import Discovery from './discovery';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  followings: values(state.session.currentUser.followings),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discovery);
