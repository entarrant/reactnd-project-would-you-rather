import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class QuestionList extends Component {
  render() {
    const { questions } = this.props;

    return (
      <div>
        <ul>
          {questions &&
            Object.keys(questions).map(question => (
              <li key={question}>
                <Question id={question} />
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
