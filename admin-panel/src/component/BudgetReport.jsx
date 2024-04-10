import React, { useState } from "react";
import BudgetChart from "./BudgetChart";
import CardFilter from "./CardFilter";

function BudgetReport() {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body pb-0">
        <h5 className="card-title">
          Budget Report<span> | {filter}</span>
        </h5>
        <BudgetChart />
        <div id="abbri">
          <h6>Mktg : Marketing</h6>
          <h6>Dev. : Development</h6>
          <h6>CS : Customer Service</h6>
          <h6>IT : Information Technology</h6>
          <h6>Ad : Administration</h6>
        </div>
      </div>
    </div>
  );
}

export default BudgetReport;
