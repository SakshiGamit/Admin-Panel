import { NavLink } from "react-router-dom";
import "./sidebar.css";
import SidebarItem from "../data/SidebarItem";

const Sidebar = () => {
  const routeMap = {
    Register: "/register",
    Login: "/login",
  };
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/*">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>
          {/* End Dashboard Nav */}
          <li className="nav-item">
            <NavLink
              className="nav-link collapsed"
              to="/"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
            >
              <i className="bi bi-journal-text"></i>
              <span>Customer</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </NavLink>
            <ul
              id="forms-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <NavLink to="/">
                  <i className="bi bi-circle"></i>
                  <span>Profile</span>
                </NavLink>
              </li>
            </ul>
          </li>
          {/* End Forms Nav */}
          <li className="nav-item">
            <NavLink
              className="nav-link collapsed"
              to="/"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
            >
              <i className="bi bi-layout-text-window-reverse"></i>
              <span>Sales</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </NavLink>
            <ul
              id="tables-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <NavLink to="/recentSales">
                  <i className="bi bi-circle"></i>
                  <span>Recent Sales</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/topSelling">
                  <i className="bi bi-circle"></i>
                  <span>Top Selling</span>
                </NavLink>
              </li>
            </ul>
          </li>
          {/* End Tables Nav */}
          <li className="nav-item">
            <NavLink
              className="nav-link collapsed"
              to="/"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
            >
              <i className="bi bi-bar-chart"></i>
              <span>Reports</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </NavLink>
            <ul
              id="charts-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <NavLink to="/report">
                  <i className="bi bi-circle"></i>
                  <span>Report Chart</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/budgetreport">
                  <i className="bi bi-circle"></i>
                  <span>Budget Chart</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/webtraffic">
                  <i className="bi bi-circle"></i>
                  <span>Website Traffic Chart</span>
                </NavLink>
              </li>
            </ul>
          </li>
          {/* End Charts Nav */}
          <li className="nav-heading">Pages</li>

          {SidebarItem.map((nav) => {
            const toRoute = routeMap[nav.name] || "*";
            return (
              <li className="nav-item" key={nav.id}>
                <NavLink to={toRoute} className="nav-link collapsed">
                  <i className={nav.icon}></i>
                  <span>{nav.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};
export default Sidebar;
