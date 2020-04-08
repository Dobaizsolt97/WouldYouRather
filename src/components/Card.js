import React from "react";
import { connect } from "react-redux";
import "./card.css";
import { Link } from "react-router-dom";

function Card(props) {
  const { user, questionInfo } = props;

  if (user) {
    return (
      <div className="ui card custom">
        <div className="content">
          <div className="center aligned header">{user.name}</div>
          <div className="center aligned description">
            <p>{questionInfo.optionOne.text} OR ...</p>

            <Link to={`/question/${props.id}`}>
              <button className="card-btn"> See poll</button>
            </Link>
          </div>
        </div>
        <div className="extra content">
          <div className="center aligned author">
            <div className="imgae-holder">
              <img
                alt={user.name}
                className="ui avatar image"
                src={user.avatarURL}
              />
            </div>
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
