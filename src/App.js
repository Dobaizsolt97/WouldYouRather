import React, { Component } from "react";
import { handleInitialData } from "./actions/async";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return <div className="App">fetching some data</div>;
  }
}

export default connect()(App);
