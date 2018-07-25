import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const THEMES = ["cta"];

export default ({ to, theme, ...rest }) => {
  if (THEMES.indexOf(theme) === -1) {
    throw new Error(`invalid theme ${theme}`);
  }

  let component = "button";
  let props = rest;

  if (to) {
    component = Link;
    props = { ...props, to };
  }

  const Component = styled(component)`
    color: #fff;
    font-size: 20px;

    display: flex;
    align-items: center;

    width: 100%;
    height: 80px;
    padding-left: 25px;

    transition: 0.2s ease all;

    text-transform: uppercase;

    background-color: #492991;
    clip-path: polygon(
      0% 0%,
      calc(100% - 50px) 0%,
      100% 50%,
      calc(100% - 50px) 100%,
      0% 100%
    );

    &:link,
    &:visited {
      color: #fff;
      text-decoration: none;
    }

    &:hover {
      background-color: #160d2a;
    }
  `;

  return <Component {...props} />;
};