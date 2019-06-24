import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class QuestionList extends Component {
  render() {
    const { type, questions } = this.props;
    const questionIds = questions ? questions[type] : [];

    if (questionIds.length === 0) {
      return <div>There are no questions of this type</div>;
    }

    const allQuestions = questions.allQuestions;

    return (
      <div>
        <ul>
          {questionIds.map(questionId => (
            <li key={questionId}>
              <Link to={`/questions/${questionId}`}>
                Would you rather... {allQuestions[questionId].optionOne.text} or{" "}
                {allQuestions[questionId].optionTwo.text}?
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
