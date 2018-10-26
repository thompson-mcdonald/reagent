import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";

const Blurb = styled.div`
  margin-bottom: 70px;
  width: 80%;
  font-size: 16px;
`;

export default () => (
  <Fragment>
    <Blurb>
      <h1>Welcome</h1>

      <p>We do not recommend anybody take illegal substances.</p>

      <p>
        If you are going to anyway; at least ensure you know what you’re taking.
        This service requires you have your reagents already, learn all about
        reagents here
      </p>

      <p>
        This isn’t a catch-all solution for taking drugs safely; reagent tests
        only test a small amount of the drug you’re consuming; know your doses
        and protect yourself
      </p>
    </Blurb>

    <Button theme="cta" to="/form">
      OK, let's go!
    </Button>
  </Fragment>
);
