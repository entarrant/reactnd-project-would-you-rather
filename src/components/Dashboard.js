import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import QuestionList from "./QuestionList";

class Dashboard extends Component {
  state = {
    displayList: "unanswered"
  };

  toggleQuestions = () => {
    if (this.state.displayList === "unanswered") {
      this.setState({ displayList: "answered" });
    } else {
      this.setState({ displayList: "unanswered" });
    }
  };

  render() {
    if (!this.props.authUser) {
      return <Redirect to="/login" />;
    }

    const { displayList } = this.state;
    const toggleText = displayList === "unanswered" ? "Answered" : "Unanswered";

    return (
      <div>
        <button onClick={this.toggleQuestions}>{toggleText}</button>
        <span>
          <h3>{displayList.toUpperCase()}</h3>
          <QuestionList type={displayList} />
        </span>
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(mapStateToProps)(Dashboard);
