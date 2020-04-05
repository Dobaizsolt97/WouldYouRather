import React from "react";
import { connect } from "react-redux";
import { User } from "../actions/authedUser";

function SignIn(props) {
  //props.dispatch(User("tyler"));

  return (
    <div className="ui container sign-in">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let value = document.getElementById("submit-field").value;

          if (value === "default") {
            return;
          }
          //props.dispatch(User(value));
          props.dispatch(User(value));
        }}
        className="ui form"
      >
        <div className="field">
          <label>Welcome back</label>
          <select id="submit-field">
            <option unselectable="true" value="default">
              Choose account
            </option>
            <option value="sarahedo">Sarah Edo</option>
            <option value="tylermcginnis">Tyler McGinnis</option>
            <option value="johndoe">John Doe</option>
          </select>
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default connect()(SignIn);
