import React, { Component } from "react";
import { connect } from "react-redux";

import { handleAnswerQuestion } from "../actions/shared";

class UnansweredQuestion extends Component {
  handleOptionSelection = answer => {
    const { dispatch, question } = this.props;
    dispatch(handleAnswerQuestion(question.id, answer));
  };

  render() {
    const { question } = this.props;

    return (
      <div>
        <ul>
          <li onClick={_event => this.handleOptionSelection("optionOne")}>
            {question.optionOne.text}
          </li>
          <li onClick={_event => this.handleOptionSelection("optionTwo")}>
            {question.optionTwo.text}
          </li>
        </ul>
      </div>
    );
  }
}

export default connect()(UnansweredQuestion);
