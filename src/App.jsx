import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Start from "./pages/Start/Start";
import Form from "./pages/Form/Form";
import Fentanyl from "./pages/Fentanyl/Fentanyl";
import How from "./pages/How/How";
import Results from "./pages/Results/Results";
import "./variables.css";
import "./reactions.css";
import "./App.css";

export default () => (
  <Router>
    <Fragment>
      <Header />

      <Wrapper>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/fentanyl" component={Fentanyl} />
          <Route path="/form" component={Form} />
          <Route path="/how" component={How} />
          <Route path="/results/d/:drugs/r/:reagents" component={Results} />
        </Switch>
      </Wrapper>
    </Fragment>
  </Router>
);
