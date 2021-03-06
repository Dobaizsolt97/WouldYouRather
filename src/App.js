import React, { Component, Fragment } from "react";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NewQuestion from "./components/NewQuestion";
import Answer from "./components/answer";
import LeaderBoard from "./components/LeaderBoard";
import BadId from "./components/badId";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    let authenticated = this.props.user[0];
    return (
      <Router>
        <div className="App">
          {authenticated ? (
            <Fragment>
              <NavBar user={this.props.user} auth={this.handleLogin} />
              <Switch>
                <Route exact path="/404" component={BadId}></Route>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/add" component={NewQuestion}></Route>
                <Route exact path="/question/:id" component={Answer}></Route>
                <Route
                  exact
                  path="/leaderboard"
                  component={LeaderBoard}
                ></Route>
              </Switch>
            </Fragment>
          ) : (
            <Route render={() => <SignIn />} />
          )}
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
