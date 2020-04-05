import React, { Component } from "react";
import { connect } from "react-redux";

class Answer extends Component {
  render(props) {
    console.log(this.props);
    const { question } = this.props;

    if (this.props.question) {
      return (
        <div className="ui container">
          <h1>Would you rather</h1>
          <form>
            <button>{question.optionOne.text}</button>
            <h1>or</h1>
            <button>{question.optionTwo.text}</button>
          </form>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default connect(mapStateToProps)(Answer);

function mapStateToProps({ Questions, User }, props) {
  const { id } = props.match.params;
  return {
    question: Questions[id],
    user: User.authed,
    id: id,
  };
}
