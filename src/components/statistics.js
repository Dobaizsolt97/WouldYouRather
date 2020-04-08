import React from "react";
import { connect } from "react-redux";
import "./statistics.css";

function Statistics(props) {
  const {
    votesA,
    votesB,
    percentageA,
    percentageB,
    userAnsweredA,
    userAnsweredB,
  } = props;

  if (userAnsweredA || userAnsweredB) {
    return (
      <div className="statistics-container">
        <h1>Here are the results</h1>
        <h2>
          You voted the same as {userAnsweredA ? percentageA : percentageB}% of
          our users
        </h2>
        <h3>{`${percentageA}% voted the first option with a total of ${votesA} votes `}</h3>
        <div className="load-bar-container">
          <div
            style={{ width: `${percentageA}%` }}
            className="loading-bar"
          ></div>
        </div>
        <h3>{`${percentageB}% voted the second option with a total of ${votesB} votes `}</h3>
        <div className="load-bar-container">
          <div
            style={{ width: `${percentageB}%` }}
            className="loading-bar"
          ></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default connect(mapStateToProps)(Statistics);

function mapStateToProps({ Questions, User }, { id }) {
  let user = User.authed;
  let question = Questions[id];
  let votesA = question.optionOne.votes.length;
  let votesB = question.optionTwo.votes.length;
  let percentageA = ((votesA * 100) / (votesA + votesB)).toFixed(0);
  let percentageB = 100 - percentageA;
  let userAnsweredA = question.optionOne.votes.includes(user);
  let userAnsweredB = question.optionTwo.votes.includes(user);

  return {
    question: Questions[id],
    user: User.authed,
    votesA,
    votesB,
    percentageA,
    percentageB,
    userAnsweredA,
    userAnsweredB,
  };
}
