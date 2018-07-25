import React from "react";
import styled from "styled-components";

const Option = styled.label`
  padding: 25px 30px;
  display: flex;
  border: 1px solid #eee;
  border-radius: 5px;
  align-items: center;
  text-align: right;
  text-transform: capitalize;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;


const Checkbox = styled.input.attrs({
  type: "checkbox"
})`
  background: var(--color-light-grey);
  margin-left: auto;
  -webkit-appearance: none;
  border-radius: 50%;
  cursor: pointer;

  &:before {
   content: '';
   display: inline-block;
   vertical-align: middle;
   background: #eee;
   width: 30px;
   height: 30px;
   border-radius: 200%;
 }
 &:checked:before {
   content: '';
   display: inline-block;
   vertical-align: text-top;
   background: #86D095;
   border-radius: 200%;
 }
 &:disabled:before {
   background: white;
   border: 3px solid #ECF0F2;
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
