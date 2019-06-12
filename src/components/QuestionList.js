import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Question from "./Question";

class QuestionList extends Component {
  render() {
    if (!this.props.authUser) {
      return <Redirect to="/login" />;
    }

    const { type } = this.props;
    const allQuestions = this.props.questions;
    const questions = allQuestions ? allQuestions[type] : [];

    return (
      <div>
        <ul>
          {questions &&
            questions.map(question => (
              <li key={question.id}>
                <Question question={question} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authUser, questions }) {
  return {
    authUser,
    questions
  };
}

export default connect(mapStateToProps)(QuestionList);
