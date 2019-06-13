import React, { Component } from "react";
import { connect } from "react-redux";

class AnsweredQuestion extends Component {
  render() {
    const { authUser, question, usersCount } = this.props;
    const { optionOne, optionTwo } = question;

    const optionOneVotes = optionOne.votes.length;
    const optionTwoVotes = optionTwo.votes.length;
    const optionOnePercent = Math.floor((optionOneVotes / usersCount) * 100);
    const optionTwoPercent = Math.floor((optionTwoVotes / usersCount) * 100);

    return (
      <div>
        <div>
          <b>{optionOne.text}</b>
          {" | "}
          {optionOne.votes.length}{" "}
          {optionOne.votes.length === 1 ? "vote" : "votes"} ({optionOnePercent}
          %)
          {optionOne.votes.includes(authUser) && (
            <span>
              {" "}
              | <b>Your answer!</b>
            </span>
          )}
        </div>
        <div>
          <b>{optionTwo.text}</b>
          {" | "}
          {optionTwo.votes.length}{" "}
          {optionTwo.votes.length === 1 ? "vote" : "votes"} ({optionTwoPercent}
          %)
          {optionTwo.votes.includes(authUser) && (
            <span>
              {" "}
              | <b>Your answer!</b>
            </span>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authUser, users }) {
  return {
    authUser,
    usersCount: Object.keys(users).length
  };
}

export default connect(mapStateToProps)(AnsweredQuestion);
