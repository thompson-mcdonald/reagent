import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Autocomplete from 'react-autocomplete';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
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
            <input type="text" placeholder="Eg: MDMA" value={this.state.value} className='field' onChange={this.handleChange} />
          </label>
          <span className='question'>Select some testing kits:</span>
          <div className='form-label scb-wrapper'>
            <div className='scb-option'>
              <input className='scb-checkbox' id="marquis" type="checkbox" value="marquis" />
              <label for='marquis'>Marquis</label>
            </div>
            <div className='scb-option'>
              <input className='scb-checkbox' id="mecke" type="checkbox" value="mecke" />
              <label for='mecke'>Mecke</label>
            </div>
            <div className='scb-option'>
              <input className='scb-checkbox' id="liebermann" type="checkbox" value="liebermann" />
              <label for='liebermann'>Liebermann</label>
            </div>
            <div className='scb-option'>
              <input className='scb-checkbox' id="mandelin" type="checkbox" value="mandelin" />
              <label for='mandelin'>Mandelin</label>
            </div>
            <div className='scb-option'>
              <input className='scb-checkbox' id="froehde" type="checkbox" value="froehde" />
              <label for='froehde'>Froehde</label>
            </div>
          </div>
          <Link to="/results" className="btn-cta">
            <span><input type="submit"  value="Get results" /></span>
          </Link>

        </form>
      </div>
    );
  }
}

export default Form;
