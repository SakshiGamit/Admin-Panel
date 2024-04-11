import React from "react";
import { Link } from "react-router-dom";

function NavProfile() {
  return (
    <div>
      <li className="nav-item dropdown pe-3">
        <a
          className="nav-link nav-profile d-flex align-items-center pe-0"
          href="#"
          data-bs-toggle="dropdown"
        >
          <img
            src="../assets/items/Profile.jpg"
            alt="profile"
            className="rounded-circle"
          />
          <span className="d-none d-md-block dropdown-toggle ps-2">
            Jeti Lam
          </span>
        </a>
        {/* <!-- End Profile Iamge Icon --> */}

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
          <li className="dropdown-header">
            <h6>Jeti Lam</h6>
            <span>Web Designer</span>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <Link
              className="dropdown-item d-flex align-items-center"
              to="/profile"
            >
              <i className="bi bi-person"></i>
              <span>My Profile</span>
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a
              className="dropdown-item d-flex align-items-center"
              href="/profile"
            >
              <i className="bi bi-gear"></i>
              <span>Account Settings</span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a
              className="dropdown-item d-flex align-items-center"
              href="/faq"
            >
              <i className="bi bi-question-circle"></i>
              <span>Need Help?</span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <Link to="/" className="dropdown-item d-flex align-items-center">
              <i className="bi bi-box-arrow-right"></i>
              <span>Sign Out</span>
            </Link>
          </li>
        </ul>
        {/* <!-- End Profile Dropdown Items --> */}
      </li>
      {/* <!-- End Profile Nav --> */}
    </div>
  );
}

export default NavProfile;
