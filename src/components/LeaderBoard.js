import React from "react";
import { connect } from "react-redux";
import BoardCard from "./BoardCard";

function LeaderBoard(props) {
  let ids = props.uid;
  let scores = props.scorelist;
  let objectsScores = {};
  for (let i = 0; i < ids.length; i++) {
    objectsScores[ids[i]] = scores[i];
  }
  let sortedlist = Object.keys(objectsScores).sort(
    (a, b) => objectsScores[b] - objectsScores[a]
  );

  return (
    <div className="ui container">
      {sortedlist.map((id) => (
        <BoardCard scores={objectsScores} key={id} id={id} />
      ))}
    </div>
  );
}

export default connect(mapStateToProps)(LeaderBoard);

function mapStateToProps({ Users, User }) {
  let scores = Object.keys(Users).map(
    (id) => Object.keys(Users[id].answers).length + Users[id].questions.length
  );
  return {
    uid: Object.keys(Users),
    scorelist: scores,
    authed: User.authed,
    user: Users,
  };
}
