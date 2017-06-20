import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  greet() {
    if (this.props.formType === 'login') {
      return (
        <div>Log in to see more</div>
      );
    } else {
      return (
        <div>Sign up to see more</div>
      );
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Pin!
          <br/>
          {this.greet()}
          {this.renderErrors}
          <div className="login-form">
            <input
              type="text"
              value={this.}
              onChange={this.update()}
          </div>

        </form>
      </div>


    )
  }
}
