import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
                <Link to={`/questions/${question.id}`}>
                  Would you rather... {question.optionOne.text} or{" "}
                  {question.optionTwo.text}?
                </Link>
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
