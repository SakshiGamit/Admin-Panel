import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header
        id="header"
        className="header fixed_top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo d-flex align-items-center">
            <figure className="m-0">
              <img src={require("../images/logo.png")} alt="logo"></img>
            </figure>
            <span className="d-none d-lg-block">NiceAdmin</span>
          </NavLink>
          <i cl ass="bi bi-list toggle-sidebar-btn"></i>
        </div>
        {/* logo ends */}
        <div className="search-bar">
          <form className="search-form d-flex align-items-center">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button type="submit" title="Search">
              <i class="bi bi-search"></i>
            </button>
          </form>
        </div>
        {/* search ends */}
      </header>

      <aside id="sidebar" className="sidebar ">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <i class="bi bi-grid"></i>
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
              <span>Forms</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </NavLink>
            <ul
              id="forms-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <NavLink to="/">
                  <i class="bi bi-circle"></i>
                  <span>Form Elements</span>
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
              <i class="bi bi-layout-text-window-reverse"></i>
              <span>Tables</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </NavLink>
            <ul
              id="tables-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <NavLink to="/">
                  <i class="bi bi-circle"></i>
                  <span>General Tables</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <i class="bi bi-circle"></i>
                  <span>Data Tables</span>
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
              <i class="bi bi-bar-chart"></i>
              <span>Charts</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </NavLink>
            <ul
              id="charts-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <NavLink to="/">
                  <i class="bi bi-circle"></i>
                  <span>Chart.js</span>
                </NavLink>
              </li>
            </ul>
          </li>
          {/* End Charts Nav */}
          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <NavLink to="*" className="nav-link collapsed">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </NavLink>
          </li>
          {/* End Profile Page Nav */}
          <li className="nav-item">
            <NavLink to="/register" className="nav-link collapsed">
              <i className="bi bi-card-list"></i>
              <span>Register</span>
            </NavLink>
          </li>
          {/* End Register Page Nav */}
          <li className="nav-item">
            <NavLink to="/login" className="nav-link collapsed">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </NavLink>
          </li>
          {/* End Login Page Nav */}
          <li className="nav-item">
            <NavLink to="*" className="nav-link collapsed">
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </NavLink>
          </li>
          {/* End Contact Page Nav */}
          <li className="nav-item">
            <NavLink to="*" className="nav-link collapsed">
              <i className="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </NavLink>
          </li>
          {/* End F.A.Q Page Nav */}
          <li className="nav-item">
            <NavLink to="*" className="nav-link collapsed">
              <i className="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </NavLink>
          </li>
          {/* End Error 404 Page Nav */}
        </ul>
      </aside>
      {/* <NavLink to="/login"> Login </NavLink>
      <NavLink to="/register"> Register </NavLink> */}
    </>
  );
};
export default Navbar;
