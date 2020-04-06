import React, { Component } from "react";
import { connect } from "react-redux";
//mport { handleSetAnswer } from "../actions/shared";
import { setAnswerToUsers, setAnswerToQuestions } from "../actions/answer";

class Answer extends Component {
  handleAnswer = (e) => {
    e.preventDefault();
    let answer = {
      authedUser: this.props.user,
      qid: this.props.id,
      answer: "optionOne",
    };
    console.log(answer);
    //update the store so that it contains the answer
    this.props.dispatch(setAnswerToUsers(answer));
    this.props.dispatch(setAnswerToQuestions(answer));
  };
  render(props) {
    console.log(this.props);
    const { question, id, user } = this.props;
    console.log(user, id);

    if (this.props.question) {
      let optionOne = question.optionOne.text;
      let optionTwo = question.optionTwo.text;

      return (
        <div className="ui container">
          <h1>Would you rather</h1>
          <form>
            <button value="optionOne" onClick={this.handleAnswer}>
              {optionOne}
            </button>
            <h1>or</h1>
            <button onClick={this.handleAnswer} value="optionTwo">
              {optionTwo}
            </button>
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
