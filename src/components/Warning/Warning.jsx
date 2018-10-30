import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Warning = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 12px;
  font-weight: lighter;
  border: 1px solid black;
  background: var(--color-light-red);
  @media screen and (min-width: 375px) {
    font-size: 14px;
    padding: 1rem 1.5rem;
  }
`;

export default () => (
  <Warning>
      It is much better to use more than 2 testing kit on samples from the same source. If you can get a positive ID with 3 test kits, you’re thrice as sure.

      It’s worth doing.
  </Warning>
);
