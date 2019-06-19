import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/shared";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    questionSubmitted: false
  };

  handleOptionChange = (event, option) => {
    const optionValue = event.target.value;
    this.setState({ [option]: optionValue });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { optionOne, optionTwo } = this.state;

    this.props.dispatch(handleAddQuestion(optionOne, optionTwo));
    this.setState({ questionSubmitted: true });
  };

  render() {
    if (!this.props.authUser) {
      return <Redirect to="/login" />;
    }
    if (this.state.questionSubmitted) {
      return <Redirect to="/" />;
    }

    const { optionOne, optionTwo } = this.state;

    return (
      <div>
        <h3>Add New Question</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Option 1"
            value={optionOne}
            onChange={event => this.handleOptionChange(event, "optionOne")}
          />
          <textarea
            placeholder="Option 2"
            value={optionTwo}
            onChange={event => this.handleOptionChange(event, "optionTwo")}
          />
          <button
            className="btn"
            type="submit"
            disabled={optionOne === "" || optionTwo === ""}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return { authUser };
}

export default connect(mapStateToProps)(NewQuestion);
