import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class QuestionList extends Component {
  render() {
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
