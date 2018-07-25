import React, { Component } from "react";
import DrugReactions from "../../components/DrugReactions/DrugReactions";
import data from "../../data/drugs.json";

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drugs: [],
      reagents: []
    };
  }

  componentWillMount() {
    const {
      drugs: paramsDrugs,
      reagents: paramsReagents
    } = this.props.match.params;

    const drugNames = paramsDrugs.split(",");
    const reagents = paramsReagents.split(",");

    const drugs = {};

    drugNames.forEach(drug => {
      drugs[drug] = data.drugs[drug];
    });

    this.setState({ drugs, reagents });
  }

  render() {
    const { drugs, reagents } = this.state;

    return (
      <div>
        <p>Ok here&apos;s what to look for</p>
        {Object.keys(drugs).map(drug => (
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
