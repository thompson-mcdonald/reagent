import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import illo from './images/illustration.png';

const Blurb = styled.div`
  margin-bottom: 70px;
  font-size: 12px;
  font-weight: lighter;
  letter-spacing: -0.025em;
  & a:link, a:visited {
    color: var(--color-blue);
    text-decoration: underline;
  }
  @media screen and (min-width: 750px) {
    font-size: 14px;
  }
`;

const Wrap = styled.div`

`;

const Illustration = styled.img`
  max-width: 100%;
  margin-bottom: 2rem;
`;

export default () => (
  <Fragment>
    <Wrap>
      <Blurb>
          <Illustration src={illo} />
          <Title>01. WHAT IS THIS?</Title>

          <p>Gabi’s Reagent Companion aims to inform drug users of best practices and being mindful of what you ingest. Tell Gabi what compounds you’re testing and what you’re testing for; and it’ll tell you what to look out for when you’re testing. </p>

          <p>
            This service requires you have your Reagents already, learn all about
            Reagents <a target="_blank" href="https://www.reagent-tests.uk/reagent-test-colours/">here</a>
          </p>

          <p>
            This isn’t a catch-all solution for taking drugs safely. Reagent tests
            only test a small amount of the drug you’re consuming. Know your doses
            and protect yourself.
          </p>

          <p>We do not recommend anybody take illegal substances.</p>
        </Blurb>

        <Button theme="cta" to="/How">
          How does reagent testing work?
        </Button>
      </Wrap>
  </Fragment>
);
