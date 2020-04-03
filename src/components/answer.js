import React from "react";
import { connect } from "react-redux";

function Answer(props) {
  return <div>answer</div>;
}

export default connect()(Answer);

function mapStateToProps({ Questions }) {
  return {
    questions: Questions
  };
}
