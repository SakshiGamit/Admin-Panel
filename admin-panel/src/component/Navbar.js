import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header
        id="header"
        className="header fixed_top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a
            href="admin-panel\public\index.html"
            className="logo d-flex align-items-center"
          >
            <figure className="m-0">
              <img src={require("../images/logo.png")} alt="logo"></img>
            </figure>
            <span className="d-none d-lg-block">NiceAdmin</span>
          </a>
          {/* <i class="fa-solid fa-bars toggle-sidebar-btn"></i> */}
          <i class="bi bi-list toggle-sidebar-btn"></i>
          {/* chsgyfvasvtygsdibdgbsgcbsagcdvsctfcsrstrsdcrsctysvdctvdbhbacbdhcbhasc */}
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
            <i class="fa-solid fa-magnifying-glass"></i>
              {/* <i class="bi bi-search">Search</i> */}
              {/* chsgyfvasvtygsdibdgbsgcbsagcdvsctfcsrstrsdcrsctysvdctvdbhbacbdhcbhasc */}
            </button>
          </form>
        </div>
        {/* search ends */}

      </header>

      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
            <i class="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
        </ul>
      </aside>
      {/* <NavLink to="/login"> Login </NavLink>
      <NavLink to="/register"> Register </NavLink> */}
    </>
  );
};
export default Navbar;
