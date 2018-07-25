import React from "react";

export default ({ reagent, handleChange }) => (
  <div className="scb-option">
    <input
      className="scb-checkbox"
      id={reagent}
      type="checkbox"
      value={reagent}
      onChange={handleChange}
    />
    <label htmlFor={reagent}>{reagent}</label>
  </div>
);
