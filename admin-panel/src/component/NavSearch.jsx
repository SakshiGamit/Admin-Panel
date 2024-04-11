import React from "react";

function NavSearch({ onClick }) {
  return (
    <div>
      <li className="nav-item d-block d-lg-none">
        <button className="btn p-0 nav-link nav-icon" onClick={onClick}>
          <i className="bi bi-search"></i>
        </button>
      </li>
    </div>
  );
}
export default NavSearch;
