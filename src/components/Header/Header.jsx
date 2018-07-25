import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100vw;
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
`;

const Brand = styled(Link)`
  color: #000;
  text-decoration: none;
`;

const Menu = styled(Link)`
  margin-left: auto;
  color: #000;
  text-decoration: none;
`;

export default () => (
  <Header>
    <Brand to="/">
      <strong>Reagent</strong>
      <br />
      Testing Companion
    </Brand>

    <Menu to="/">MENU</Menu>
  </Header>
);
