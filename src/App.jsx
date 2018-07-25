import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Start from "./pages/Start";
import Form from "./pages/Form";
import Results from "./pages/Results";
import Nav from "./components/Nav";

export default () => (
  <div className="App">
    <Header />
    <div className="container bg-white bo-top pad-v pad-h">
      <div className="d-b">
        <Router>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/form" component={Form} />
            <Route path="/results/d/:drugs/r/:reagents" component={Results} />
          </Switch>
        </Router>
        <div className="clear" />
      </div>
    </div>
    <Nav />
  </div>
);
