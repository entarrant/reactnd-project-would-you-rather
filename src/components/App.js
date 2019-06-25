import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../App.css";

import Dashboard from "./Dashboard";
import Login from "./Login";
import Question from "./Question";
import LoginBar from "./LoginBar";
import NavBar from "./NavBar";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";

class App extends Component {
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

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(mapStateToProps)(App);
