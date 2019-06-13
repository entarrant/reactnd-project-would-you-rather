import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { loadQuestionsData } from "../actions/shared";
import QuestionList from "./QuestionList";

class Dashboard extends Component {
  componentDidMount() {
    const { authUser } = this.props;
    if (authUser) {
      this.props.dispatch(loadQuestionsData(authUser));
    }
  }

  render() {
    if (!this.props.authUser) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <span>
          <h3>Unanswered</h3>
          <QuestionList type="unanswered" />
        </span>

        <span>
          <h3>Answered</h3>
          <QuestionList type="answered" />
        </span>
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(mapStateToProps)(Dashboard);
