import React, { Component } from 'react';

function DrugReactions(props) {

  return(
    <h2> {props.drug} </h2>

    {props.reagents.map( (reagent) => (
      <DrugReaction
        drug={props.drug}
        reagent={reagent}
        reaction={props.reactions[reagent]}
      />
    ))}

  )
}

export default DrugReactions;
