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

  altPrompt() {
    if (this.props.formType === 'login') {
      return (
        <div className="altprompt-text">
          <div>Not on Pin yet?</div>
          &nbsp; &nbsp;
          <Link to="/signup">Sign Up</Link>
        </div>
        )
      } else {
          return (
            <div className="altprompt-text">
              <div>Already a member?  </div>
              &nbsp; &nbsp;
              <Link to="/login">Log in</Link>
            </div>
          )
        }
      }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
        ))}
      </ul>
    );
  }

  render() {
    let errors;
    if (this.props.errors.length === 0) {
      errors = "";
    } else if (this.props.errors !== undefined) {
      errors = this.renderErrors();
    } else {
      errors = "";
    }

    return (
      <div className="login-body">
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="icon">
              <div className="icon-pic">
                <img src="./assets/pin_icon_small.jpg" />
              </div>

            </div>
            <h3>Welcome to Pin</h3>
            <br/>
            <div className="greet">
              {this.greet()}
            </div>

            {errors}

            <div className="login-form">
              <div className="form-username">
                <input
                  className="login-username"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update('username')}
                />
              </div>
              <div className="form-password">
                <input
                  className="login-password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  />
              </div>
              <input type="submit" value="Submit" className="submit-button" />
            </div>
            <div className="alt-prompt">
              {this.altPrompt()}
            </div>
          </form>


        </div>
      </div>
    );

  }
}

export default withRouter(SessionForm);
