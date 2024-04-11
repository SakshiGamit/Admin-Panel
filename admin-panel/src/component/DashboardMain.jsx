import React from "react";
import "./main.css";
import Pagetitle from "./Pagetitle";
import Dashboard from "./Dashboard";

function DashboardMain() {
  return (
    <main className="main" id="main">
      <Pagetitle page="Dashboard" />
      <Dashboard />
    </main>
  );
}

export default DashboardMain;
