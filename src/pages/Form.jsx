import React, { Component } from "react";
import Select from "react-select";
import ReagentCheckbox from "../components/ReagentCheckbox";
import Button from "../components/Button/Button";
import data from "../data/drugs.json";

const selectOptions = Object.keys(data.drugs).map(drug => ({
  value: drug,
  label: drug
}));

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showResults: false,
      drugs: [],
      reagents: {
        marquis: false,
        mecke: false,
        liebermann: false,
        madelin: false,
        froehde: false
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;

    const newState = { ...this.state };

    if (target && target.type === "checkbox") {
      newState.reagents[target.value] = target.checked;
    } else {
      newState.drugs = event.map(e => e.value);
    }

    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { reagents, drugs } = this.state;

    const formattedReagents = Object.keys(reagents).filter(r => reagents[r]);

    const reagentParams = `/r/${formattedReagents.join(",")}`;
    const drugParams = `/d/${drugs.join(",")}`;

    this.props.history.push(`/results${drugParams}${reagentParams}`);
  }

  render() {
    const { reagents } = this.state;

    return (
      <div className="App form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <label className="form-label">
            <span className="question">
              Start by entering what you&apos;re going to test:
            </span>
            <Select
              options={selectOptions}
              onChange={this.handleChange}
              isMulti
            />
          </label>
          <span className="question">Select some testing kits:</span>
          <div className="form-label scb-wrapper">
            {Object.keys(reagents).map(reagent => (
              <ReagentCheckbox
                reagent={reagent}
                handleChange={this.handleChange}
              />
            ))}
          </div>
          <Button theme="cta" type="submit">
            Get Results
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
