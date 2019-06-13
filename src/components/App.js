import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../App.css";

import Login from "./Login";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Would You Rather?</h1>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
