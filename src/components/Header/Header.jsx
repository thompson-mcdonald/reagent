import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navigation from './../Navigation/Navigation';

const Header = styled.header`
  height: 70px;
  background: #FEE0C4;
  font-family: 'IBM Plex Sans', sans-serif;
  border: 1px solid #000;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 1rem;
  max-width: 800px;
  margin: 0 auto;
  font-size: 12px;
  position: relative;
  letter-spacing: 0.05em;
  @media screen and (min-width: 750px) {
    padding-top: 18px;
    padding: 0 4rem;
  }
  @media screen and (min-width: 375px) {
    font-size: 14px;
  }
`;

const Smiley = styled.div`
  transform: rotate(90deg);
  height: 20px;
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 50%;
`;

const TopBar = styled.div`
  background: #FFFD7E;
  font-family: 'IBM Plex Sans', sans-serif;
  border-left: 1px solid;
  max-width: 800px;
  margin: 0 auto;
  border-right: 1px solid;
  border-top: 1px solid;
  padding: 0.5rem 1rem;
  position: relative;
  font-size: 12px;
  letter-spacing: 0.05em;
  @media screen and (min-width: 750px) {
    padding: .5rem 4rem;
  }
  @media screen and (min-width: 375px) {
    font-size: 14px;
  }
`;

const Brand = styled.a`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  &:link, &:visited {
    text-decoration: none;
  }
`;

const BuyKits = styled.a `
  background: var(--color-blue);
  color: white;
  text-decoration: none;
  padding: 0.4rem 0.7rem;
  text-align: right;
  text-transform: uppercase;
  position: absolute;
  top: 1.1rem;
  right: 1rem;
  border: 1px solid #111;
  transition: transform 2s;
  &:hover {
    transform: scale(1.3) rotate(2deg);
    transition: transform 2s;
  }
  @media screen and (min-width: 750px) {
    right: 4rem;
    top: 0.9rem;
  }
`;

const MenuButton = styled.a `
  position: absolute;
  right: 1rem;
  @media screen and (min-width: 750px) {
    right: 4rem;
  }
`;

export default () => (
  <div>
    <TopBar>
      <Brand>
        GABI
      </Brand>
      <Smiley>
        :)
      </Smiley>
      <Navigation>
        MENU
      </Navigation>
    </TopBar>
    <Header>
      <Brand href="/">
        Reagent Companion
      </Brand>
        <BuyKits href="https://www.reagent-tests.uk/" target="_blank">Buy Test Kits</BuyKits>
    </Header>
  </div>
);
