import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Leaderboard extends Component {
  render() {
    if (!this.props.authUser) {
      return <Redirect to="/login" />;
    }

    const { users } = this.props;

    const sortedUserIds = Object.keys(users).sort(
      (uid1, uid2) => users[uid2].points - users[uid1].points
    );

    return (
      <div>
        <h2>Leaderboard</h2>
        <ol>
          {sortedUserIds.map(userId => {
            const user = users[userId];
            const answers = Object.keys(user.answers).length;
            const questions = user.questions.length;

            return (
              <li key={userId}>
                <img src={user.avatarURL} alt={user.name} className="avatar" />
                {user.name} - {answers} answered, {questions} asked
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

function mapStateToProps({ authUser, users }) {
  return {
    authUser,
    users
  };
}

export default connect(mapStateToProps)(Leaderboard);
