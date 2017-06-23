import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { requestSingleUser, receiveSingleUser } from '../../actions/profile_actions';

class Profile extends Component {
  constructor(props) {
   super(props);

 }
  componentDidMount() {
    this.props.requestSingleUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }


  render() {
    const user = requestSingleUser(this.props.userId);

    console.log({user});
    return(
      <section className="Profile">
        <div className="profile-container">
          <h2> {this.props.userId} </h2>
          <h3> TEST</h3>
        </div>
      </section>
    )

  }

}

export default Profile;
