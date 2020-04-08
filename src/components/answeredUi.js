import React from "react";
import { connect } from "react-redux";

function AnsweredUi(props) {
  let { opt1, opt2, chosenAnswer } = props;

  return (
    <div className="right-container">
      <h1>Would you rather</h1>
      <form>
        {chosenAnswer === "optionOne" ? (
          <ChosenBtn option={opt1} />
        ) : (
          <Btn option={opt1} />
        )}
        <h1>or</h1>
        {chosenAnswer === "optionTwo" ? (
          <ChosenBtn option={opt2} />
        ) : (
          <Btn option={opt2} />
        )}
      </form>
    </div>
  );
}

export default connect(mapStateToProps)(AnsweredUi);

function mapStateToProps({ Questions, Users, User }, { id, opt1, opt2 }) {
  let user = User.authed;
  let chosenAnswer = Users[user].answers[id];

  return {
    questions: Questions,
    opt1,
    opt2,
    chosenAnswer,
  };
}
const Btn = function (props) {
  return <div className=" unanswered-button">{props.option}</div>;
};
const ChosenBtn = function (props) {
  return <div className=" chosen-btn">{props.option}</div>;
};
