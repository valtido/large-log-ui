import React from "react";

const Stats = ({ info, warning, error }) => (
  <div>
    <div>INFO: {info}</div>
    <div>WARNING: {warning}</div>
    <div>ERROR: {error}</div>
  </div>
);

export default Stats;
