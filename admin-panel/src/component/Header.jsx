import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import "./headerNav.css";
import NavNotification from "./NavNotification";
import NavMsg from "./NavMsg";
import NavProfile from "./NavProfile";
import NavSearch from "./NavSearch";

const Header = () => {
  const handleToggleSidebar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };

  const [isSearchbarAcive, setSearchbarAcive] = useState(false);
  const toggleSearchbar = () => {
    setSearchbarAcive(!isSearchbarAcive);
  }

  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <NavLink to="/Home" className="logo d-flex align-items-center">
            <figure className="m-0">
              <img src={require("../images/logo.png")} alt="logo"></img>
            </figure>
            <span className="d-none d-lg-block">Astoria</span>
          </NavLink>
          <button className="btn p-0" onClick={handleToggleSidebar}>
            <i className="bi bi-list toggle-sidebar-btn"></i>
          </button>
        </div>
        {/* logo ends */}
        <div
          className={`search-bar ${isSearchbarAcive ? "search-bar-show" : ""}`}
        >
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
            <NavSearch onClick={toggleSearchbar} />
            <NavNotification />
            <NavMsg />
            <NavProfile />
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
