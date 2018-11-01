import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import data from "../../data/drugs.json";

const Blurb = styled.div`
  margin-bottom: 70px;
  font-size: 12px;
  font-weight: lighter;
  letter-spacing: -0.025em;
  @media screen and (min-width:740px) {
    font-size: 14px;
  }
`;

class How extends Component {
  render() {
    return (
      <div>
      <Blurb>
        <Title>02. How does reagent testing work?</Title>
        <p>Reagent Testing works by dropping a small quantity of a reagent chemical on a sample of drug matter.</p>

        <p>To do this you need the following:</p>

        <ul>
          <li>Gloves</li>
          <li>A Ceramic Surface (A small plate)</li>
          <li>Access to a water source</li>
          <li>A Minimum of 2 Reagent Chemicals</li>
        </ul>

          <p>You can see a full guide on the process here</p>

          <p>You can buy Reagent Testing kits via the link above. They send kits in discreet packaging with a full chart (that this was app was created from).  </p>
          </Blurb>
          <Button theme="cta" to="/Form">
            OK, Let's Test
          </Button>
      </div>
    );
  }
}

export default How;
