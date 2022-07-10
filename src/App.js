import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/NewsContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <LoadingBar color="#0000FF" progress={this.state.progress} />
          <Navbar> </Navbar>
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                pageSize={6}
                country="in"
                category="general"
              ></News>
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="business"
                pageSize={6}
                country="in"
                category="business"
              ></News>
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                pageSize={6}
                country="in"
                category="sports"
              ></News>
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                pageSize={6}
                country="in"
                category="general"
              ></News>
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                pageSize={6}
                country="in"
                category="health"
              ></News>
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                pageSize={6}
                country="in"
                category="science"
              ></News>
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                pageSize={6}
                country="in"
                category="technology"
              ></News>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
