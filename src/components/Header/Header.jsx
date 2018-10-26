import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background: var(--color-light-grey);
  padding-top: 3rem;
`;

const Brand = styled.a`
  color: black;
  text-decoration: none;
  &:link, &:visited {
    text-decoration: none;
  }
`;

const HeaderContainer = styled.div`
  width: 90%;
  max-width: 850px;
  margin: 0 auto;
  padding: 1rem 2rem;
  position: relative;
`;

const Navigation = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem 0;
`;

const NavLink = styled.a`
  padding: 0 1rem;
  font-size: 16px;
  font-weight: bold;
  &:link, &:visited {
    text-decoration: none;
    color: blue;
    opacity: 0.6;
    transition: all .2s;
  }
  &:hover {
    opacity: 1;
    transition: all .2s;
  }
`;

export default () => (
  <Header>
    <HeaderContainer>
      <Brand href="/">
        <strong>Gabi</strong>
        <br />
        Reagent Companion
      </Brand>
      <Navigation>
        <NavLink href="https://www.reagent-tests.uk/reagent-test-colours/" target="_blank">How to Test</NavLink>
        <NavLink href="https://www.reagent-tests.uk/" target="_blank">Buy Testing Kits</NavLink>
      </Navigation>
    </HeaderContainer>
  </Header>
);
