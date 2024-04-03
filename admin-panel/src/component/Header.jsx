import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const handleToggleSidebar = ()=>{
    document.body.classList.toggle("toggle-sidebar");
  }
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo d-flex align-items-center">
            <figure className="m-0">
              <img src={require("../images/logo.png")} alt="logo"></img>
            </figure>
            <span className="d-none d-lg-block">NiceAdmin</span>
          </NavLink>
          <button
            className="btn p-0"
            onClick={handleToggleSidebar}
          >
            <i className="bi bi-list toggle-sidebar-btn"></i>
          </button>
        </div>
        {/* logo ends */}
        <div className="search-bar">
          <form className="search-form d-flex align-items-center">
            <input
              type="text"
              name="query"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
        {/* search ends */}
        {/* nav starts */}
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <button className="btn p-0 nav-link nav-icon">
              <i className="bi bi-search"></i>
              </button>
            </li>
            {/* end search icon */}
            <li className="nav-item">
              <a className="nav-link nav-icon" href="/">
                <i className="bi bi-bell"></i>
                <span className="badge badge-number bg-primary">4</span>
              </a>
            </li>
            {/* notification ends */}
            <li className="nav-item">
              <a className="nav-link nav-icon" href="/">
                <i className="bi bi-chat-left-text"></i>
                <span className="badge badge-number bg-success ">3</span>
              </a>
            </li>
            {/* messages ends */}
            <li className="nav-item pe-3">
              <a className="nav-link nav-profile d-flex align-items-center pe-0" href="/">
                <img src={require("../images/profile-img.jpg")} alt="profile" className="rounded-circle"></img>
                <span className="d-none d-md-block ps-2">
                    K. Anderson
                </span>
              </a>
            </li>
            {/* profile ends */}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
