import React, { Component } from "react";
import { connect } from "react-redux";

import { handleLogin } from "../actions/shared";

class Login extends Component {
  state = {
    user: ""
  };

  render() {
    const { authUser, history, users } = this.props;

    if (authUser) {
      history.goBack();
      return null;
    }

    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
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

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(handleLogin(this.state.user));
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
