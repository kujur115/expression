import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <div className="bi me-2"></div>
            <div className="fs-4">Expression</div>
          </Link>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                FAQs
              </NavLink>
            </li>
          </ul>
        </header>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
