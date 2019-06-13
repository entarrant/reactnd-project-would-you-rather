import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";

class Question extends Component {
  renderQuestionContent = question => {
    if (this.props.questions.answered.includes(question)) {
      return <AnsweredQuestion question={question} />;
    } else {
      return <UnansweredQuestion question={question} />;
    }
  };

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
          this.renderQuestionContent(question)
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
