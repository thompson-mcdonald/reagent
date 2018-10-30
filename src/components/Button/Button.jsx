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
    color: black;
    font-size: 14px;

    display: flex;
    align-items: center;

    width: 90%;
    height: 60px;
    padding-left: 1rem;
    position: relative;
    transition: 0.2s ease all;
    text-transform: uppercase;

    background-color: var(--color-light-yellow);
    border: 1px solid black;
    border-right: 0;
    z-index: 0;

    &:link,
    &:visited {
      color: black;
      text-decoration: none;
    }

    &:hover {
      background-color: #E5E25D;
      transform: translateX(10px);
      cursor: pointer;
    }

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
  `;

  return <Component {...props} />;
};
