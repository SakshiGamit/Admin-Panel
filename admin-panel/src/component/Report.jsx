import React, { useState } from "react";
import CardFilter from "./CardFilter";
import ReportCharts from "./ReportCharts";
import "./dashboard.css";

function Report() {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Reports <span>/{filter}</span>
        </h5>
        <ReportCharts />
      </div>
    </div>
  );
}
export default Report;
