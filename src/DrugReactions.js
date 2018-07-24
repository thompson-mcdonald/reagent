import React, { Component } from "react";
import DrugReaction from "./DrugReaction";

function DrugReactions(props) {
  return (
    <div>
      <h2> {props.drug} </h2>

      {props.reagents.map((reagent, i) => (
        <DrugReaction
          drug={props.drug}
          reagent={reagent}
          reaction={props.reactions[reagent]}
        />
      ))}
    </div>
  );
}

export default DrugReactions;
