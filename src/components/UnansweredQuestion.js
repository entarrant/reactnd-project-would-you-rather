import React, { Component } from "react";

class UnansweredQuestion extends Component {
  render() {
    const { question } = this.props;

    return (
      <div>
        <div>
          <b>{question.optionOne.text}</b>
        </div>
        <div>
          <b>{question.optionTwo.text}</b>
        </div>
      </div>
    );
  }
}

export default UnansweredQuestion;
