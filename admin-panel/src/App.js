import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Error from "./component/Error-404";
import RecentSales from "./component/RecentSales";
import TopSelling from "./component/TopSelling";
import Report from "./component/Report";
import BudgetReport from "./component/BudgetReport";
import WebTraffic from "./component/WebTraffic";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recentsales" element={<RecentSales />} />
      <Route path="/topselling" element={<TopSelling />} />
      <Route path="/report" element={<Report />} />
      <Route path="/budgetreport" element={<BudgetReport />} />
      <Route path="/webtraffic" element={<WebTraffic />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default App;
