import React, { Component } from "react";

function ReagentCheckbox(props) {
  return (
    <div className="scb-option">
      <input
        className="scb-checkbox"
        id={props.reagent}
        type="checkbox"
        value={props.reagent}
        onChange={props.handleChange}
      />
      <label htmlFor={props.reagent}>{props.reagent}</label>
    </div>
  );
}

export default ReagentCheckbox;
