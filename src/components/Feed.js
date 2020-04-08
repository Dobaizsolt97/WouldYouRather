import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import "./feed.css";

class Feed extends Component {
  state = { filterStatus: "unanswered" };

  render(props) {
    const { questions, user } = this.props;
    let ids = this.props.questionIds;
    let answeredIds = ids.filter(
      (id) =>
        questions[id].optionOne.votes.includes(user) ||
        questions[id].optionTwo.votes.includes(user)
    );

    let unansweredIds = ids.filter((id) => !answeredIds.includes(id));

    if (ids) {
      return (
        <div className="container">
          <div className="btn-container">
            <button
              className="button"
              onClick={() =>
                this.setState(() => ({ filterStatus: "answered" }))
              }
            >
              Answered
            </button>
            <button
              className="button"
              onClick={() =>
                this.setState(() => ({ filterStatus: "unanswered" }))
              }
            >
              Unanswered
            </button>
          </div>
          {this.state.filterStatus === "unanswered"
            ? unansweredIds.map((id) => <Card key={id} id={id}></Card>)
            : answeredIds.map((id) => <Card key={id} id={id}></Card>)}
        </div>
      );
    } else return null;
  }
}

export default connect(mapStateToProps)(Feed);

function mapStateToProps({ Questions, User }) {
  return {
    questionIds: Object.keys(Questions).sort(
      (a, b) => Questions[b].timestamp - Questions[a].timestamp
    ),
    user: User.authed,
    questions: Questions,
  };
}
