import React from "react";
import styled from "styled-components";

const Option = styled.label`
  padding: 25px 30px;
  display: flex;
  border: 1px solid #eee;
  border-radius: 5px;
  align-items: center;
`;

const Checkbox = styled.input.attrs({
  type: "checkbox"
})`
  background: var(--color-light-grey);
  margin-left: auto;
`;

export default ({ reagent, handleChange }) => (
  <Option htmlFor={reagent}>
    {reagent}
    <Checkbox id={reagent} value={reagent} onChange={handleChange} />
  </Option>
);
