import React from "react";

function NavMsg() {
  return (
    <div>
      <li className="nav-item dropdown">
        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
          <i className="bi bi-chat-left-text"></i>
          <span className="badge bg-success badge-number">3</span>
        </a>
        {/* <!-- End Messages Icon --> */}

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
          <li className="dropdown-header">
            You have 3 new messages
            <a href="#">
              <span className="badge rounded-pill bg-primary p-2 ms-2">
                View all
              </span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="message-item">
            <a href="#">
              <img
                src="../assets/items/messages-1.jpg"
                alt=""
                className="rounded-circle"
              />
              <div>
                <h4>Park Jimin</h4>
                <p>
                  Velit asperiores et ducimus soluta repudiandae labore officia
                  est ut...
                </p>
                <p>4 hrs. ago</p>
              </div>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="message-item">
            <a href="#">
              <img
                src="../assets/items/messages-2.jpg"
                alt=""
                className="rounded-circle"
              />
              <div>
                <h4>Lithug Nelson</h4>
                <p>
                  Velit asperiores et ducimus soluta repudiandae labore officia
                  est ut...
                </p>
                <p>6 hrs. ago</p>
              </div>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="message-item">
            <a href="#">
              <img
                src="../assets/items/messages-3.jpg"
                alt=""
                className="rounded-circle"
              />
              <div>
                <h4>Agust D.</h4>
                <p>
                  Velit asperiores et ducimus soluta repudiandae labore officia
                  est ut...
                </p>
                <p>8 hrs. ago</p>
              </div>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="dropdown-footer">
            <a href="#">Show all messages</a>
          </li>
        </ul>
        {/* <!-- End Messages Dropdown Items --> */}
      </li>
      {/* <!-- End Messages Nav --> */}
    </div>
  );
}

export default NavMsg;
