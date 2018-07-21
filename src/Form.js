import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Autocomplete from 'react-autocomplete';
import ReagentCheckbox from './ReagentCheckbox'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  render() {
    return (
      <div className="App form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <label className='form-label'>
            <span className='question'>Start by entering what you're going to test:</span>
            <input type="text" placeholder="Eg: MDMA" value={this.state.drug} className='field' onChange={this.handleChange} />
          </label>
          <span className='question'>Select some testing kits:</span>
          <div className='form-label scb-wrapper'>
            { Object.keys(this.state.reagents).map((reagent, i) => (
              <ReagentCheckbox reagent={reagent} handleChange={this.handleChange} />
            ))}
          </div>
          <a className='btn-cta'>
            <span><input type="submit"  value="Get results" /></span>
          </a>

        </form>
      </div>
    );
  }
}

export default Form;
