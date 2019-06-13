import React, { Component } from "react";

class AnsweredQuestion extends Component {
  render() {
    const { question } = this.props;

    return (
      <div>
        Would you rather... (you already answered!)
        <div>{question.optionOne.text}</div>
        <div>{question.optionTwo.text}</div>
      </div>
    );
  }
}

export default AnsweredQuestion;
