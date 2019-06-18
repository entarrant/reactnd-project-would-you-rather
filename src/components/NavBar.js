import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        <NavLink to="/add">Add Question</NavLink>
      </div>
    );
  }
}

export default connect()(NavBar);
