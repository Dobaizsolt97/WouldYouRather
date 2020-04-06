import React from "react";
import { connect } from "react-redux";
import "./statistics.css";

function Statistics(props) {
  console.log(props);
  let user = props.user;
  let votesA = props.question.optionOne.votes.length;
  let votesB = props.question.optionTwo.votes.length;
  let percentageA = ((votesA * 100) / (votesA + votesB)).toFixed(0);
  let percentageB = 100 - percentageA;
  let userAnsweredA = props.question.optionOne.votes.includes(user);
  let userAnsweredB = props.question.optionTwo.votes.includes(user);

  console.log(userAnsweredA);
  console.log(percentageA + "%");
  console.log(votesA, votesB);
  if (userAnsweredA || userAnsweredB) {
    return (
      <div className="statistics-container">
        <h1>Here are the results</h1>
        <div className="load-bar-container">
          {userAnsweredA ? (
            <div
              style={{ width: `${percentageA}%` }}
              className="loading-bar"
            ></div>
          ) : (
            <div
              style={{ width: `${percentageB}%` }}
              className="loading-bar"
            ></div>
          )}
        </div>
        <h3>
          You voted the same as {userAnsweredA ? percentageA : percentageB}% of
          our users
        </h3>
      </div>
    );
  } else {
    return null;
  }
}

export default connect(mapStateToProps)(Statistics);

function mapStateToProps({ Questions, User }, { id }) {
  return {
    question: Questions[id],
    user: User.authed,
  };
}
