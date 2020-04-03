import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import "./feed.css";

class Feed extends Component {
  state = {};
  componentDidMount() {
    this.setState(() => ({
      ids: this.props.questionIds
    }));
  }
  render(props) {
    let ids = this.state.ids;

    return (
      <div className="container">
        {ids ? ids.map(id => <Card key={id} id={id}></Card>) : null}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Feed);

function mapStateToProps({ Questions }) {
  return {
    questionIds: Object.keys(Questions)
  };
}
