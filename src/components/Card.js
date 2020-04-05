import React from "react";
import { connect } from "react-redux";
import "./card.css";
import { Link } from "react-router-dom";

function Card(props) {
  let user = props.user;
  let postInfo = props.questionInfo;
  console.log(props.id);
  if (user) {
    return (
      <div className="ui card custom">
        <div className="content">
          <div className="center aligned header">{user.name}</div>
          <div className="center aligned description">
            <p>{postInfo.optionOne.text} OR ...</p>

            <Link to={`/question/${props.id}`}>
              <button> See poll</button>
            </Link>
          </div>
        </div>
        <div className="extra content">
          <div className="center aligned author">
            <img
              alt={user.name}
              className="ui avatar image"
              src={user.avatarURL}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default connect(mapStateToProps)(Card);

function mapStateToProps({ Users, Questions }, { id }) {
  let questionInfo = Questions[id];
  return {
    questionInfo: questionInfo,
    user: Users[questionInfo.author],
  };
}
