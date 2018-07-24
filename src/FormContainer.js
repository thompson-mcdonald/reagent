import React, { Component } from 'react';
import ReagentCheckbox from './ReagentCheckbox'

function FormContainer(props) {
  return(
    <div className="App form-wrapper">
      <form onSubmit={props.handleSubmit}>
        <label className='form-label'>
          <span className='question'>Start by entering what you're going to test:</span>
          <input type="text" placeholder="Eg: MDMA" value={props.drug} className='field' onChange={props.handleChange} />
        </label>
        <span className='question'>Select some testing kits:</span>
        <div className='form-label scb-wrapper'>
          { Object.keys(props.reagents).map((reagent, i) => (
            <ReagentCheckbox reagent={reagent} handleChange={props.handleChange} />
          ))}
        </div>
        <a className='btn-cta'>
          <span><input type="submit"  value="Get results" /></span>
        </a>

      </form>
    </div>
  )
}

export default FormContainer;
