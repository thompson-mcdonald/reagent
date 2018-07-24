import React from "react";

export default ({ reagent, drug, color }) => (
  <div className="result g-h-left p-r">
    <div className="p-a r20 tt-u t3">
      <span className="label p-a r0">reagent</span>
      <span className="name fw-b p-a t20 r0">{reagent}</span>
    </div>
    <div className="p-a l20 tt-u t3">
      <span className="label">drug</span>
      <span className="name fw-b">{drug}</span>
    </div>
    <div className={`result-color p-a t90 bg-${color}`}>
      <span className="tt-u p-a l0 r0 ta-c t0 b0">{color}</span>
    </div>
  </div>
);
