import React, { Component } from "react";
import Select from "react-select";
import styled from "styled-components";
import ReagentCheckbox from "../../components/ReagentCheckbox/ReagentCheckbox";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Warning from "../../components/Warning/Warning";
import InfoLink from "../../components/InfoLink/InfoLink";
import data from "../../data/drugs.json";

const selectOptions = Object.keys(data.drugs).map(drug => ({
  value: drug,
  label: drug
}));

const FormWrap = styled.form`
`;

const FormLabel = styled.label`
  margin-bottom: 40px;
  display: block;
`;

const Qwrapper = styled.div`
  margin-bottom: 40px;
  display: block;
`;

const Question = styled.h2`
  width: 100%;
  font-size: 12px;
  padding-bottom: 2px;
  font-weight: lighter;
  margin-bottom: 1rem;
  letter-spacing: -0.05em;
  @media screen and (min-width: 375px) {
    font-size: 14px;
  }
  @media screen and (min-width: 750px) {
    font-size: 16px;
  }
`;

const ReagentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px 15px;

`;

const Selector = styled(Select)`
  font-size: 16px;
  position: relative;
  z-index: 4;
  @media screen and (min-width: 750px) {
    font-size: 14px;
  }
`;

const TriggerModal = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 20px;
  & a:link, a:visited {
    color: #888;
  }
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
      },
      showWarning: true
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
    const { reagents, reagentsWarning } = this.state;

    return (
      <div>
        <Title>Ok, Let's Test</Title>
        <FormWrap onSubmit={this.handleSubmit}>
          <FormLabel>
            <Question>Start by entering what you&apos;re going to test:</Question>
            <Selector
              options={selectOptions}
              onChange={this.handleChange}
              isMulti
            />
          </FormLabel>

          <Qwrapper>
            <Question>Select some testing kits:</Question>
            { this.state.showWarning ? <Warning /> : null }
            <ReagentOptions>
              {Object.keys(reagents).map(reagent => (
                <ReagentCheckbox
                  reagent={reagent}
                  handleChange={this.handleChange}
                />
              ))}
            </ReagentOptions>
            <InfoLink />
          </Qwrapper>

          <Button theme="cta" type="submit">
            Get Results
          </Button>
        </FormWrap>
      </div>
    );
  }
}

export default Form;
