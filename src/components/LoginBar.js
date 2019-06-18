import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authUser";

class LoginBar extends Component {
  handleLogout = () => {
    this.props.dispatch(logoutUser());
  };

  render() {
    return (
      <div>
        <h3>Welcome, {this.props.userName}</h3>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

function mapStateToProps({ authUser, users }) {
  const user = users[authUser];
  return {
    userName: user.name
  };
}

export default connect(mapStateToProps)(LoginBar);
