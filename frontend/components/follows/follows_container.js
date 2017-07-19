import { connect } from 'react-redux';
import { selectUserData } from '../../reducers/selectors';
import Follows from './follows';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser, 
    user: state.user,
    followers: selectUserData(state.user.followers),
    followings: selectUserData(state.user.followings)
  });
};

export default connect(
  mapStateToProps,
  null
)(Follows);
