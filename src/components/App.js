import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../App.css";

import Dashboard from "./Dashboard";
import Login from "./Login";
import Question from "./Question";
import LoginBar from "./LoginBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Would You Rather?</h1>
          {this.props.authUser ? <LoginBar /> : null}
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/questions/:qid" component={Question} />
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
