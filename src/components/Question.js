import React, { Component } from "react";
import { connect } from "react-redux";

class Question extends Component {
  render() {
    const { question } = this.props;

    return (
      <div>
        Would you rather... {question.optionOne.text} or{" "}
        {question.optionTwo.text} ?
      </div>
    );
  }
}

export default connect()(Question);
