import React from "react";
import Report from "./Report";
import RecentSales from "./RecentSales";
import TopSelling from "./TopSelling";
import RecentActivity from "./RecentActivity";
import BudgetReport from "./BudgetReport";
import WebTraffic from "./WebTraffic";
import News from "./News";
import Card from "./Card";

function Dashboard() {
  return (
    <>
      <section className="dashboard section">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <Card />
              <div className="col-12">
                <Report />
              </div>
              <div className="col-12">
                <RecentSales />
              </div>
              <div className="col-12">
                <TopSelling />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <RecentActivity />
            <BudgetReport />
            <WebTraffic />
          </div>
          <div className="col-12">
            <News />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
