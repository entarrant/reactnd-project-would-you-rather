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
    const { questions, users } = this.props;

    const question = questions ? questions.allQuestions[qid] : null;

    if (!question) {
      return <div>Could not find question with id {qid}</div>;
    }

    const author = users[question.author];

    return (
      <div>
        <div>
          <img src={author.avatarURL} alt={author.name} className="avatar" />
          {this.renderQuestionContent(question)}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authUser, questions, users }) {
  return {
    authUser,
    questions,
    users
  };
}

export default connect(mapStateToProps)(Question);
