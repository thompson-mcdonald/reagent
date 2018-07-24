import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./Form";

class Start extends Component {
  render() {
    return (
      <div>
        <div className="start content">
          <p>We do not recommend anybody take illegal substances.</p>

          <p>
            If you are going to anyway; at least ensure you know what you’re
            taking. This service requires you have your reagents already, learn
            all about reagents here
          </p>

          <p>
            This isn’t a catch-all solution for taking drugs safely; reagent
            tests only test a small amount of the drug you’re consuming; know
            your doses and protect yourself
          </p>
        </div>
        <Link to="/form" className="btn-cta">
          <span>Ok, Let's go</span>
        </Link>
      </div>
    );
  }
}

export default Start;
