import React from "react";

const reactionFor = ({ drug, reagent, reaction }) => (
  <div>
    <p>Drug: {drug}</p>
    <p>Reagent: {reagent}</p>
    <p>Reaction: {reaction}</p>
  </div>
);

export default ({ drug, reagents, reactions }) => (
  <div>
    <h2>{drug}</h2>

    {reagents.map(reagent =>
      reactionFor({ drug, reagent, reaction: reactions[reagent] })
    )}
  </div>
);
