import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../App.css";

import { loadUserData } from "../actions/shared";

import Dashboard from "./Dashboard";
import Login from "./Login";
import Question from "./Question";
import LoginBar from "./LoginBar";
import NavBar from "./NavBar";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";

class App extends Component {
  componentDidMount() {
    if (!this.props.usersLoaded) {
      this.props.dispatch(loadUserData());
    }
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Would You Rather?</h1>
          {this.props.authUser ? (
            <div>
              <LoginBar />
              <NavBar />
            </div>
          ) : null}
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/questions/:qid" component={Question} />
          <Route path="/add" component={NewQuestion} />
          <Route path="/leaderboard" component={Leaderboard} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authUser, questions, users }) {
  return {
    authUser,
    usersLoaded: !!users
  };
}

export default connect(mapStateToProps)(App);
