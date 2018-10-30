import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Button from './../Button/Button';

const Trigger = styled.button`
  background: #FFFD7E;
  text-transform: uppercase;
  font-family: 'IBM Plex Sans', sans-serif;
  right: 1rem;
  top: .6rem;
  position: absolute;
  padding: 0;
  font-size: 12px;
  @media screen and (min-width: 750px) {
    right: 4rem;
    font-size: 14px;
  }
  &:hover {
    cursor: pointer;
  }
  &:focus, &:active {
    outline: 0;
  }
`;

const NavLinks = styled.div`
  display: block;
  background: #FFEAFE;
  width: 100%;
  max-width: 798px;
  height: 200px;
  border-top: 1px solid #111;
  border-bottom: 1px solid #111;
  padding: 1rem;
  & button {
    width: 100%;
    background: transparent;
    text-align: left;
    padding: 0.5rem 0;
  }
  @media screen and (min-width: 750px) {
    height: 230px;
  }
`;

const NavButton = styled(Link) `
  width: 100%;
  background: transparent;
  font-family: 'IBM Plex Sans', sans-serif;
  text-align: left;
  display: block;
  padding: 0.5rem 0;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  @media screen and (min-width: 750px) {
    padding: 1rem 3rem;
  }
`;

const LetsTest = styled.a`
  color: black;
  font-size: 14px;
  display: flex;
  align-items: center;
  height: 60px;
  width: 70%;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  background-color: var(--color-light-yellow);
  border: 1px solid black;
  border-right: 0;
  z-index: 0;
  padding: 0 1.5rem;
  margin-left: 0;
  margin-top: 1rem;
  &:hover:before {
    background-color: #E5E25D;
    transition: 0.2s ease all;
  }
  &:before{
    content: '';
    position: absolute;
    z-index: 2;
    height: 41px;
    width: 41px;
    right: -36px;
    top: 3px;
    background-color: var(--color-light-yellow);
    transition: 0.2s ease all;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    transform: rotate(-45deg) translate(-14px,-7px);
  }
  &:hover {
      background: #E5E25D;
  }
  @media screen and (min-width: 750px) {
    margin-left: 3rem;
  }
`;

const NavMenu = styled.div`
    position: absolute;
    width: calc(100vw - 2px);
    z-index: 6;
    left: 0;
    top: 2.2rem;
`;

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div>
        <Trigger onClick={this.showMenu}>
          menu
        </Trigger>

        {
          this.state.showMenu
            ? (
              <NavMenu>
                <NavLinks>
                  <NavButton to="/"> 01. What is this? </NavButton>
                  <NavButton to="/How"> 02. How Do Reagent Tests Work? </NavButton>
                  <LetsTest theme="cta" href="/Form"> Let's Test </LetsTest>
                </NavLinks>
              </NavMenu>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Navigation;
