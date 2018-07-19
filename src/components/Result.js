import React, { Component } from 'react';

class Result extends Component {
  render(props) {
    return (
      <div className='result g-h-left p-r'>
        <div className='p-a r20 tt-u t3'>
          <span className='label p-a r0'>reagent</span>
          <span className='name fw-b p-a t20 r0'>{this.props.reagent}</span>
        </div>
        <div className='p-a l20 tt-u t3'>
          <span className='label'>drug</span>
          <span className='name fw-b'>{this.props.drug}</span>
        </div>
        <div className={`result-color p-a t90 bg-${ this.props.color }`}>
          <span className='tt-u p-a l0 r0 ta-c t0 b0'>{this.props.color}</span>
        </div>
      </div>
    );
  }
}

export default Result;
