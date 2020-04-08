import React from "react";
import { connect } from "react-redux";
import "./BoardCard.css";

function BoardCard(props) {
  const { user } = props;

  let answers = Object.keys(user.answers).length;
  let questions = user.questions.length;
  let score = answers + questions;

  return (
    <div className="card-container">
      <div className="image-container">
        <img alt={user.name} src={user.avatarURL}></img>
        <h3>{user.name}</h3>
      </div>

      <div className="text-container">
        <div className="text-box">
          <h1>{score} points</h1>
        </div>
        <h2>{questions} questions asked</h2>
        <h2>{answers} answers given</h2>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(BoardCard);

function mapStateToProps({ Users }, { id }) {
  return {
    user: Users[id],
    id: id,
  };
}
