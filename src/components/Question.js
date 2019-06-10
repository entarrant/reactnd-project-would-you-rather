import React, { Component } from "react";
import { connect } from "react-redux";

class Question extends Component {
  render() {
    return <div>Question for you sir</div>;
  }
}

export default connect()(Question);
