import React, { Component } from 'react';

function DrugReaction(props) {

  return(
    <div>
      <p> Drug: {props.drug} </p>
      <p> Reagent: {props.reagent} </p>
      <p> Reaction: {props.reaction} </p>
    </div>
  )
}

export default DrugReaction;
