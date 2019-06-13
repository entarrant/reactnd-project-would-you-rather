import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../App.css";
import { loadUserData } from "../actions/shared";
import Login from "./Login";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadUserData());
  }

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
