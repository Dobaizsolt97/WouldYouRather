import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./NewQuestion.css";

import { handleSetQuestion } from "../actions/shared";

class NewQuestion extends React.Component {
  state = { opt1: "", opt2: "", toHome: false };
  handleInput1 = (e) => {
    this.setState({ opt1: e.target.value });
  };
  handleInput2 = (e) => {
    this.setState({ opt2: e.target.value });
  };
  handleSubmit = (e) => {
    //stop the form from submitting
    e.preventDefault();
    //obtaining question propreties
    const { opt1, opt2 } = this.state;
    let author = this.props.authed;
    //format of the new question object that has to be submitted
    let question = {
      optionOneText: opt1,
      optionTwoText: opt2,
      author,
    };
    //returning the new Question with the right format, this has to be dispatched to the redux store
    this.props.dispatch(handleSetQuestion(question));
    this.setState(() => ({ toHome: true }));
  };

  render() {
    if (this.state.toHome) {
      return <Redirect to="/"></Redirect>;
    }

    console.log(this.state);
    console.log(this.props.authed);
    return (
      <div className="ui container">
        <form className="ui form new-question-form">
          <div className="field">
            <h1>Would you Rather</h1>
            <label>Option one</label>
            <input
              id="text1"
              type="text"
              name="first-name"
              placeholder="option one..."
              value={this.state.opt1}
              onChange={this.handleInput1}
            />
          </div>
          <div className="field">
            <label>Option two</label>
            <input
              id="text2"
              type="text"
              name="last-name"
              placeholder="option two..."
              value={this.state.opt2}
              onChange={this.handleInput2}
            />
          </div>
          <div className="field"></div>
          <button onClick={this.handleSubmit} className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewQuestion);

function mapStateToProps({ User }) {
  return {
    authed: User.authed,
  };
}
