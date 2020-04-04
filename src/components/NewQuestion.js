import React from "react";
import { connect } from "react-redux";

import { handleSetQuestion } from "../actions/async";

class NewQuestion extends React.Component {
  state = { opt1: "", opt2: "" };
  handleInput1 = e => {
    this.setState({ opt1: e.target.value });
  };
  handleInput2 = e => {
    this.setState({ opt2: e.target.value });
  };
  handleSubmit = e => {
    //stop the form from submitting
    e.preventDefault();
    //obtaining question propreties
    const { opt1, opt2 } = this.state;
    let author = this.props.authed;
    //format of the new question object that has to be submitted
    let question = {
      optionOneText: opt1,
      optionTwoText: opt2,
      author
    };
    //returning the new Question with the right format, this has to be dispatched to the redux store
    this.props.dispatch(handleSetQuestion(question));
  };
  render() {
    console.log(this.state);
    return (
      <div className="ui container">
        <form className="ui form">
          <div className="field">
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
          <button
            onClick={this.handleSubmit}
            className="ui button"
            type="submit"
          >
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
    authed: User.authed
  };
}