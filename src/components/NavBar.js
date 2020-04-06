import React from "react";
import { connect } from "react-redux";
import { User } from "../actions/authedUser";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <div className="ui pointing menu">
        <Link to="/" className="active item">
          Home
        </Link>
        <Link to="/add" className="item">
          New Question
        </Link>
        <Link to="/leaderboard" className="item">
          Leaderboards
        </Link>
        <div className="right menu">
          {props.user[0] ? (
            <div className="item">Hello {props.user}</div>
          ) : null}
          <div className="item">
            <div className="ui transparent icon input">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault(props.dispatch(User(null)));
                }}
                className="item"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="ui segment">
        <p></p>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(NavBar);

function mapStateToProps({ User }) {
  return {
    name: User,
  };
}
