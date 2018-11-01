import React, { Component } from "react";
import Select from "react-select";
import styled from "styled-components";
import ReagentCheckbox from "../../components/ReagentCheckbox/ReagentCheckbox";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Warning from "../../components/Warning/Warning";
import InfoLink from "../../components/InfoLink/InfoLink";
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

const Credit = styled.p`
  font-size 10px;
  opacity: 0.8;
`;

const OutLink = styled.a`
  font-size: 12px;
  color: var(--color-blue);
  &:link, &:visited {
    text-decoration: none;
  }
`;

class Fentanyl extends Component {
  render() {
    return (
      <Blurb>
        <Title>03. Testing for Fentanyl</Title>

        <p>We do NOT condone the use of illegal drugs. A lot of people decide to take drugs every day, this information exists in the interest of their wellbeing. We do not promote drug use in any way.</p>

        <p>Fentanyl is a really powerful opioid drug sometimes sold in place of benzodiazepines, heroin and other opioids. It can be pressed into tablets or sold as a powder.</p>

        <p>Fentanyl test strips are single-use and can only alert you to the presence of Fentanyl, not the amount present. It works by being submerged in water with your test sample dissolved into it, if there is one line present on the strip after being submerged, it has detected Fentanyl. If there are two, you are clear.</p>

        <p>When testing a small sample of a tablet or powder, it is important to acknowledge that Fentanyl can be spread unevenly; it is therefore preferred to test a lot of what you have availble if you do have concerns. Dissolved powder samples can be recovered by evaporation and consumed post-test.</p>

        <OutLink target="_blank" href="https://www.reagent-tests.uk/product/fentanyl-test-strip/">
          Go to Reagent-Tests UK Fentanyl Strips >
        </OutLink>

        <Credit>Page content adapted from Reagent-Tests UK</Credit>


      </Blurb>
    );
  }
}

export default Fentanyl;
