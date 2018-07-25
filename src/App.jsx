import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Start from "./pages/Start/Start";
import Form from "./pages/Form/Form";
import Results from "./pages/Results";
import "./App.css";

export default () => (
  <Router>
    <Fragment>
      <Header />

      <Wrapper>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/form" component={Form} />
          <Route path="/results/d/:drugs/r/:reagents" component={Results} />
        </Switch>
      </Wrapper>
    </Fragment>
  </Router>
);
