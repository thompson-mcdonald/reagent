import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import Autocomplete from 'react-autocomplete';
import Results from './Results'
import FormContainer from './FormContainer'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showResults: false,
      drug: '',
      reagents: {
        marquis: false,
        mecke: false,
        liebermann: false,
        madelin: false,
        froehde: false,
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    var newState = Object.assign({}, this.state, {})

    if (target.type == 'checkbox'){
      newState[target.value] = target.checked
    }else{
      newState['drug'] = target.value
    }

    this.setState(newState)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/results')
  }

  render() {
    return (
      <FormContainer 
        drug={this.state.drug}
        reagents={this.state.reagents}
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange} /> 
    );
  }
}

export default Form;
