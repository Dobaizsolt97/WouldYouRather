import React, { Component } from "react";
import { connect } from "react-redux";
import "./answer.css";
import { setAnswerToUsers, setAnswerToQuestions } from "../actions/answer";
import { Redirect } from "react-router-dom";
import Statistics from "../components/statistics";

class Answer extends Component {
  state = { hasAnswered: false };
  componentDidMount() {
    let { question, user } = this.props;
    let userAnswearedA = question.optionOne.votes.includes(user);
    let userAnswearedB = question.optionTwo.votes.includes(user);
    if (userAnswearedA || userAnswearedB) {
      this.setState(() => ({ hasAnswered: true }));
    }
  }
  handleAnswer = (e) => {
    e.preventDefault();
    let answer = {
      authedUser: this.props.user,
      qid: this.props.id,
      answer: e.target.value,
    };
    //update the store so that it contains the answer
    this.props.dispatch(setAnswerToUsers(answer));
    this.props.dispatch(setAnswerToQuestions(answer));
    this.setState(() => ({ hasAnswered: true }));
  };
  render(props) {
    const { question, users } = this.props;

    if (this.props.user) {
      let optionOne = question.optionOne.text;
      let optionTwo = question.optionTwo.text;
      let author = question.author;
      let link = users[author].avatarURL;

      return (
        <div className="ui container">
          <div className="answer-container">
            <div className="left-container">
              <img alt={author} src={link}></img>
              <p>{this.props.users[author].name} asked...</p>
            </div>
            {this.state.hasAnswered ? null : (
              <div className="right-container">
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
            )}
          </div>
          {this.state.hasAnswered ? <Statistics id={this.props.id} /> : null}
        </div>
      );
    } else {
      return <Redirect to="/"></Redirect>;
    }
  }
}

export default connect(mapStateToProps)(Answer);

function mapStateToProps({ Questions, User, Users }, props) {
  const { id } = props.match.params;
  return {
    question: Questions[id],
    user: User.authed,
    id: id,
    users: Users,
  };
}
