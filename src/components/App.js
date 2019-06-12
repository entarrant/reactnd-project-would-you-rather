import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../App.css";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import QuestionList from "./QuestionList";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Would You Rather?</h1>
          <Route path="/login" component={Login} />
          <QuestionList type="unanswered" />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
