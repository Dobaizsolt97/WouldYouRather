import React, { Component } from "react";
import { handleInitialData } from "./actions/async";
import { connect } from "react-redux";
import SignIn from "./components/SignIn";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import Answer from "./components/answer";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    let authenticated = this.props.user[0];
    return (
      <div className="App">
        <NavBar user={this.props.user} auth={this.handleLogin} />
        {authenticated ? null : <SignIn />}
        {authenticated === null ? null : <Feed />}
        <Answer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);

function mapStateToProps({ User }) {
  return {
    user: Object.values(User)
  };
}
