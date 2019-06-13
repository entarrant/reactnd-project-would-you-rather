import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { loginUser } from "../actions/authUser";
import { loadUserData } from "../actions/shared";

class Login extends Component {
  state = {
    user: ""
  };

  componentDidMount() {
    this.props.dispatch(loadUserData());
  }

  render() {
    const { authUser, users } = this.props;
    if (authUser) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <form onSubmit={event => this.handleLogin(event)}>
          <select onChange={this.handleSelection}>
            <option>{authUser ? authUser.name : ""}</option>
            {users &&
              Object.keys(users).map(user => (
                <option key={user} value={user}>
                  {users[user].name}
                </option>
              ))}
          </select>
          <button disabled={this.checkDisabled()}>Submit</button>
        </form>
      </div>
    );
  }

  handleLogin = event => {
    event.preventDefault();
    this.props.dispatch(loginUser(this.state.user));
  };

  handleSelection = event => {
    this.setState({ user: event.target.value });
  };

  checkDisabled = () => {
    return this.state.user === "";
  };
}

function mapStateToProps({ authUser, users }) {
  return {
    authUser,
    users
  };
}

export default connect(mapStateToProps)(Login);
