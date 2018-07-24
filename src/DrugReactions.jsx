import React from "react";
import DrugReaction from "./DrugReaction";

export default ({ drug, reagents, reactions }) => (
  <div>
    <h2>{drug}</h2>

    {reagents.map((reagent) => (
      <DrugReaction
        drug={drug}
        reagent={reagent}
        reaction={reactions[reagent]}
      />
    ))}
  </div>
);
