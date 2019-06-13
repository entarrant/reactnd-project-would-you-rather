import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Question extends Component {
  render() {
    if (!this.props.authUser) {
      return <Redirect to="/login" />;
    }

    const { qid } = this.props.match.params;
    const question = this.props.questions
      ? this.props.questions.allQuestions[qid]
      : null;

    return (
      <div>
        {question ? (
          <div>
            Would you rather...
            <div>{question.optionOne.text}</div>
            <div>{question.optionTwo.text}</div>
          </div>
        ) : (
          <div>Could not find question with id {qid}</div>
        )}
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

export default connect(mapStateToProps)(Question);
