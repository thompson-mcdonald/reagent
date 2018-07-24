import React, { Component } from "react";
import data from "./data.json";
import DrugReactions from "./DrugReactions";

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drugs: [],
      reagents: []
    };
  }

  componentWillMount() {
    const { drugs: paramsDrugs, reagents: paramsReagents } = this.props.match.params;

    const drugNames = paramsDrugs.split(",");
    const reagents = paramsReagents.split(",");

    const drugs = {};

    drugNames.forEach(drug => { drugs[drug] = data.drugs[drug] });

    this.setState({ drugs, reagents });
  }

  render() {
    const { drugs, reagents } = this.state;

    return (
      <div>
        <p>Ok here&apos;s what to look for</p>
        {Object.keys(drugs).map((drug) => (
          <DrugReactions
            drug={drug}
            reactions={drugs[drug].reactions}
            reagents={reagents}
          />
        ))}
      </div>
    );
  }
}

export default Results;
