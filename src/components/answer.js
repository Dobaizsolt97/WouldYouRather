import React, { Component } from "react";
import { connect } from "react-redux";
import "./answer.css";
import { setAnswerToUsers, setAnswerToQuestions } from "../actions/answer";
import AnsweredUi from "./answeredUi";

import Statistics from "../components/statistics";
import { Redirect } from "react-router-dom";

class Answer extends Component {
  state = { hasAnswered: false };
  componentDidMount() {
    let { answered } = this.props;
    if (answered) {
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
    const { question, users, badid, id } = this.props;

    if (badid) {
      return <Redirect to="/404"></Redirect>;
    }

    if (this.props.user !== null) {
      let optionOne = question.optionOne.text;
      let optionTwo = question.optionTwo.text;
      let author = question.author;
      let link = users[author].avatarURL;

      return (
        <div className="ui container">
          <div className="answer-container">
            <div className="left-container">
              <img className="left-conaiter-img" alt={author} src={link}></img>
              <h3>{this.props.users[author].name} asked...</h3>
            </div>
            {this.state.hasAnswered ? (
              <AnsweredUi id={id} opt1={optionOne} opt2={optionTwo} />
            ) : (
              <div className="right-container">
                <h1>Would you rather</h1>
                <form>
                  <button
                    className="button"
                    value="optionOne"
                    onClick={this.handleAnswer}
                  >
                    {optionOne}
                  </button>
                  <h1>or</h1>
                  <button
                    className="button"
                    onClick={this.handleAnswer}
                    value="optionTwo"
                  >
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
      return null;
    }
  }
}

export default connect(mapStateToProps)(Answer);

function mapStateToProps({ Questions, User, Users }, props) {
  const { id } = props.match.params;
  //checking if the id entered in the URL is in our database
  let badid = !Object.keys(Questions).includes(id);
  //if it is not then we only send this information to our component so it can redirect the user
  if (badid) {
    return {
      badid: badid,
    };
  }

  let question = Questions[id];
  let user = User.authed;
  let userAnswearedA = question.optionOne.votes.includes(user);
  let userAnswearedB = question.optionTwo.votes.includes(user);
  let answered = userAnswearedA || userAnswearedB;
  return {
    question,
    user,
    id,
    users: Users,
    questions: Questions,
    answered,
    badid,
  };
}
