import React from "react";
import styled from "styled-components";

const Option = styled.label`
  padding: 15px 20px;
  height: 45px;
  display: flex;
  border: 1px solid #eee;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid black;
  font-size: 12px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 750px) {
    font-size: 14px;
    padding: 25px 30px;
  }
`;


const Checkbox = styled.input.attrs({
  type: "checkbox"
})`
  background: var(--color-light-grey);
  margin-left: auto;
  -webkit-appearance: none;
  border: 0;
  cursor: pointer;
  background: transparent;
  &:before {
   content: '';
   display: inline-block;
   vertical-align: middle;
   background: #eee;
   width: 100vw;
   height: 200px;
   outline: none;
   position: absolute;
   left: 0;
   top: 0;
   z-index: -1;
   transition: background .2s;
  }
 &:checked:before {
   content: '';
   display: inline-block;
   vertical-align: text-top;
   background: #888;
   width: 100vw;
   height: 200px;
   border: 0;
   transition: background .2s;
 }
 &:checked {
   border: 0;
   background: transparent;
   transition: background .2s;
 }
 &:disabled:before {
   background: white;
   color: #eee;
 }
 &:focus {
   outline: none;
 }

`;

export default ({ reagent, handleChange }) => (
  <Option htmlFor={reagent}>
    {reagent}
    <Checkbox id={reagent} value={reagent} onChange={handleChange} />
  </Option>
);
