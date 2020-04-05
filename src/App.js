import React, { Component } from "react";
import { handleInitialData } from "./actions/async";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import NewQuestion from "./components/NewQuestion";
import Answer from "./components/answer";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    let authenticated = this.props.user[0];
    return (
      <Router>
        <div className="App">
          <NavBar user={this.props.user} auth={this.handleLogin} />
          {authenticated ? (
            <Route exact path="/" component={Feed}></Route>
          ) : (
            <Route exact path="/" component={SignIn}></Route>
          )}

          <Route exact path="/add" component={NewQuestion}></Route>
          {/* <Answer match={{ params: { id: "6ni6ok3ym7mf1p33lnez" } }}></Answer> */}
          <Route path="/question/:id" component={Answer}></Route>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);

function mapStateToProps({ User }) {
  return {
    user: Object.values(User),
  };
}
