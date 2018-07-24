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
    let params = this.props.match.params;
    let drugNames = params.drugs.split(",");
    let reagents = params.reagents.split(",");

    let drugs = {};

    drugNames.forEach(function(drug) {
      drugs[drug] = data.drugs[drug];
    });

    this.setState({
      drugs: drugs,
      reagents: reagents
    });
  }

  render() {
    return (
      <div>
        <p> Ok here's what to look for </p>
        {Object.keys(this.state.drugs).map((drug, i) => (
          <DrugReactions
            drug={drug}
            reactions={this.state.drugs[drug].reactions}
            reagents={this.state.reagents}
          />
        ))}
      </div>
    );
  }
}

export default Results;
