import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../App.css";

import Dashboard from "./Dashboard";
import Login from "./Login";
import Question from "./Question";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Would You Rather?</h1>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/questions/:qid" component={Question} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
