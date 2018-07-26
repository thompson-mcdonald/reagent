import React, { Component } from "react";
import Select from "react-select";
import styled from "styled-components";
import ReagentCheckbox from "../../components/ReagentCheckbox/ReagentCheckbox";
import Button from "../../components/Button/Button";
import data from "../../data/drugs.json";

const selectOptions = Object.keys(data.drugs).map(drug => ({
  value: drug,
  label: drug
}));

const FormLabel = styled.label`
  margin-bottom: 40px;
  display: block;
`;

const Qwrapper = styled.div`
  margin-bottom: 40px;
  display: block;
`;

const Question = styled.div`
  font-size: 20px;
  margin-bottom: 2rem;
`;

const ReagentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

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
        mandelin: false,
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
      <form onSubmit={this.handleSubmit}>
        <FormLabel>
          <Question>Start by entering what you&apos;re going to test:</Question>
          <Select
            options={selectOptions}
            onChange={this.handleChange}
            isMulti
          />
        </FormLabel>

        <Qwrapper>
          <Question>Select some testing kits:</Question>
          <ReagentOptions>
            {Object.keys(reagents).map(reagent => (
              <ReagentCheckbox
                reagent={reagent}
                handleChange={this.handleChange}
              />
            ))}
          </ReagentOptions>
        </Qwrapper>

        <Button theme="cta" type="submit">
          Get Results
        </Button>
      </form>
    );
  }
}

export default Form;
