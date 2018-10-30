import React, { Component } from "react";
import DrugReactions from "../../components/DrugReactions/DrugReactions";
import data from "../../data/drugs.json";
import Title from "../../components/Title/Title";

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
        <Title>Ok here&apos;s what to look for:</Title>
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
