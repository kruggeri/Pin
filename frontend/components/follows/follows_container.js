import { connect } from 'react-redux';
import { selectUserData } from '../../reducers/selectors';
import Follows from './follows';

const mapStateToProps = (state) => {
  return ({
    followers: selectUserData(state.user.followers),
    followings: selectUserData(state.user.followings)
  });
};

export default connect(
  mapStateToProps,
  null
)(Follows);
