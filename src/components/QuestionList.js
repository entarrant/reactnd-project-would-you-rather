import React, { Component } from "react";
import { connect } from "react-redux";

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
                Would you rather... {question.optionOne.text} or{" "}
                {question.optionTwo.text}?
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
