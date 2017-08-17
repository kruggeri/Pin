import { connect } from 'react-redux';
import { values } from 'lodash';
import Follows from './follows';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    user: state.user,
    followers: values(state.user.followers),
    followings: values(state.user.followings)
  };
};

export default connect(
  mapStateToProps,
  null
)(Follows);
