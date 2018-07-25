import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Start from "./pages/Start";
import Form from "./pages/Form";
import Results from "./pages/Results";
import "./App.css";

export default () => (
  <Router>
    <Fragment>
      <Header />

      <div className="container bg-white bo-top pad-v pad-h">
        <div className="d-b">
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/form" component={Form} />
            <Route path="/results/d/:drugs/r/:reagents" component={Results} />
          </Switch>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  </Router>
);
