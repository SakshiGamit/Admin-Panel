import { NavLink, useLocation } from "react-router-dom";
import "./sidebar.css";
import SidebarItem from "../data/SidebarItem";

const Sidebar = () => {
  const location = useLocation();
  const routeMap = {
    Register: "/register",
    Login: "/",
    Profile:"/profile",
    Contact:"/contact",
    FAQ: "/faq",
  };
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <NavLink className={`nav-link ${location.pathname === "/Home" ? "" : "collapsed"}`}
            to="/Home">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>
          {/* End Dashboard Nav */}
          <li className="nav-item">
            <NavLink
              className="nav-link collapsed"
              to="/Home"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
            >
              <i className="bi bi-journal-text"></i>
              <span>Customers</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </NavLink>
            <ul
              id="forms-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <NavLink to="/customers">
                  <i className="bi bi-circle"></i>
                  <span>List of Customer</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/createcustomer">
                  <i className="bi bi-circle"></i>
                  <span>Create Customer</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/*">
                  <i className="bi bi-circle"></i>
                  <span>Customer details</span>
                </NavLink>
              </li>
            </ul>
          </li>
          {/* End Customer Nav */}
          <li className="nav-item">
            <NavLink
              className="nav-link collapsed"
              to="/Home"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
            >
              <i className="bi bi-bar-chart"></i>
              <span>Product</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </NavLink>
            <ul
              id="charts-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <NavLink to="/products">
                  <i className="bi bi-circle"></i>
                  <span>List of Product</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/*">
                  <i className="bi bi-circle"></i>
                  <span>Product details</span>
                </NavLink>
              </li>
            </ul>
          </li>
          {/* End Product Nav */}
          <li className="nav-item">
            <NavLink
              className="nav-link collapsed"
              to="/Home"
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
          {/* End Sales Nav */}
          <li className="nav-heading">General</li>

          {SidebarItem.map((nav) => {
            const toRoute = routeMap[nav.name] || "*";
            return (
              <li className="nav-item" key={nav.id}>
                <NavLink to={toRoute} className={`nav-link ${location.pathname === toRoute ? "" : "collapsed"}`}>
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
